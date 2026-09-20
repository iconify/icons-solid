import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.dy9bj1bni {
  fill: currentColor;
  d: path("M208 68h-76V32a12 12 0 0 0-20.49-8.48l-96 96a12 12 0 0 0 0 17l96 96A12 12 0 0 0 132 224v-36h76a20 20 0 0 0 20-20V88a20 20 0 0 0-20-20m-4 96h-84a12 12 0 0 0-12 12v19l-67-67l67-67v19a12 12 0 0 0 12 12h84Z");
}
</style><path class="dy9bj1bni"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-fat-left-bold"} {...others} />);
}

export default Component;
