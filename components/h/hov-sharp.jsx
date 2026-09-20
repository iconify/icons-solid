import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qbbfu-92e {
  fill: currentColor;
  d: path("M12 22L6 12l6-10l6 10z");
}
</style><path class="qbbfu-92e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:hov-sharp"} {...others} />);
}

export default Component;
