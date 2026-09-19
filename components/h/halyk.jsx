import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cap0h-bmd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.308 20.793V42.5m23.384-21.707V42.5M12.308 31.606h23.384m5.119-13.15L24 5.5L7.189 18.456");
}

.geu0lxbhh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.434 15.859V8.301h-5.553v3.272");
}
</style><path class="cap0h-bmd"/><path class="geu0lxbhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:halyk"} {...others} />);
}

export default Component;
