import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dfh4vob0k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 10.844h37v25.565h-37zm10.991 20.424h15.018m-10.562-8.444h6.106M24 19.77v6.107m0-19.146v4.113m0 25.565v4.86m-4.195-4.862l-3.55 4.855m15.49 0l-3.55-4.855");
}
</style><path class="dfh4vob0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:vulcan-diary"} {...others} />);
}

export default Component;
