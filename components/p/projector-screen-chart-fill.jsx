import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ljg4yvblr {
  fill: currentColor;
  d: path("M232 64V48a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16v96h-8a8 8 0 0 0 0 16h88v17.38a24 24 0 1 0 16 0V192h88a8 8 0 0 0 0-16h-8V80a16 16 0 0 0 16-16m-128 80a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm24 96a8 8 0 1 1 8-8a8 8 0 0 1-8 8m8-96a8 8 0 0 1-16 0v-24a8 8 0 0 1 16 0Zm32 0a8 8 0 0 1-16 0v-32a8 8 0 0 1 16 0ZM40 64V48h176v16z");
}
</style><path class="ljg4yvblr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:projector-screen-chart-fill"} {...others} />);
}

export default Component;
