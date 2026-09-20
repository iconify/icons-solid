import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ap8xb2bzp {
  fill: currentColor;
  d: path("M136 68h-4V32a12 12 0 0 0-20.49-8.49l-96 96a12 12 0 0 0 0 17l96 96A12 12 0 0 0 132 224v-36h4a12 12 0 0 0 12-12V80a12 12 0 0 0-12-12m-12 96h-4a12 12 0 0 0-12 12v19l-67-67l67-67v19a12 12 0 0 0 12 12h4Zm104-84v96a12 12 0 0 1-24 0V80a12 12 0 0 1 24 0m-40 0v96a12 12 0 0 1-24 0V80a12 12 0 0 1 24 0");
}
</style><path class="ap8xb2bzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-fat-lines-left-bold"} {...others} />);
}

export default Component;
