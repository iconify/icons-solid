import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.xrtbvkqwk {
  fill: currentColor;
  d: path("m228.24 115.76l-96-96a6 6 0 0 0-8.48 0l-96 96A6 6 0 0 0 32 126h42v26a6 6 0 0 0 6 6h96a6 6 0 0 0 6-6v-26h42a6 6 0 0 0 4.24-10.24M176 114a6 6 0 0 0-6 6v26H86v-26a6 6 0 0 0-6-6H46.49L128 32.49L209.51 114Zm6 102a6 6 0 0 1-6 6H80a6 6 0 0 1 0-12h96a6 6 0 0 1 6 6m0-32a6 6 0 0 1-6 6H80a6 6 0 0 1 0-12h96a6 6 0 0 1 6 6");
}
</style><path class="xrtbvkqwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-fat-lines-up-light"} {...others} />);
}

export default Component;
