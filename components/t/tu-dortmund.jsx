import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.i4y70wd6o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.341 7.978v27.433a4.61 4.61 0 0 0 4.61 4.61h3.384");
}

.tdz8smb6t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 15.586h15.558a3 3 0 0 1 3 3V30.8a9.22 9.22 0 0 0 9.22 9.22h0A9.22 9.22 0 0 0 42.5 30.8V15.586m0 15.215v9.221");
}
</style><path class="i4y70wd6o"/><path class="tdz8smb6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tu-dortmund"} {...others} />);
}

export default Component;
