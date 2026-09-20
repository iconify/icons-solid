import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cbpii_boa {
  fill: currentColor;
  d: path("m228.24 115.76l-96-96a6 6 0 0 0-8.48 0l-96 96A6 6 0 0 0 32 126h42v82a14 14 0 0 0 14 14h80a14 14 0 0 0 14-14v-82h42a6 6 0 0 0 4.24-10.24M176 114a6 6 0 0 0-6 6v88a2 2 0 0 1-2 2H88a2 2 0 0 1-2-2v-88a6 6 0 0 0-6-6H46.49L128 32.49L209.51 114Z");
}
</style><path class="cbpii_boa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-fat-up-light"} {...others} />);
}

export default Component;
