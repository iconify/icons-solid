import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.za-qaq8gv {
  fill: currentColor;
  d: path("M196 64V40a12 12 0 0 0-12-12H72a12 12 0 0 0-12 12v24a12 12 0 0 0 12 12h11.32L60.05 223.38a4 4 0 0 0 3.33 4.62a4.5 4.5 0 0 0 .62 0a4 4 0 0 0 4-3.38L76.26 172h103.48l8.31 52.62A4 4 0 0 0 192 228a4.5 4.5 0 0 0 .63-.05a4 4 0 0 0 3.33-4.57L172.68 76H184a12 12 0 0 0 12-12M68 64V40a4 4 0 0 1 4-4h112a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H72a4 4 0 0 1-4-4m110.48 100h-101l13.9-88h73.16Z");
}
</style><path class="za-qaq8gv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:stool-thin"} {...others} />);
}

export default Component;
