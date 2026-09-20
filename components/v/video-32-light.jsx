import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.ivb4nweyl {
  fill: currentColor;
  d: path("M6.5 5.5A4.5 4.5 0 0 0 2 10v12a4.5 4.5 0 0 0 4.5 4.5h12A4.5 4.5 0 0 0 23 22v-1.484l4.021 3.097c1.217.936 2.979.069 2.979-1.466V9.853c0-1.535-1.762-2.402-2.979-1.466L23 11.484V10a4.5 4.5 0 0 0-4.5-4.5zM22 12.495V22a3.5 3.5 0 0 1-3.5 3.5h-12A3.5 3.5 0 0 1 3 22V10a3.5 3.5 0 0 1 3.5-3.5h12A3.5 3.5 0 0 1 22 10zm1 6.759v-6.508l4.631-3.566A.85.85 0 0 1 29 9.853v12.294a.85.85 0 0 1-1.369.673z");
}
</style><path class="ivb4nweyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:video-32-light"} {...others} />);
}

export default Component;
