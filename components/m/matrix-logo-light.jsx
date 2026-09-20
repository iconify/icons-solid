import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.q3xvvtbcs {
  fill: currentColor;
  d: path("M46 46v164h18a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6V40a6 6 0 0 1 6-6h24a6 6 0 0 1 0 12Zm170-12h-24a6 6 0 0 0 0 12h18v164h-18a6 6 0 0 0 0 12h24a6 6 0 0 0 6-6V40a6 6 0 0 0-6-6m-64 56a30 30 0 0 0-24 12a30 30 0 0 0-42-6a6 6 0 0 0-12 0v64a6 6 0 0 0 12 0v-40a18 18 0 0 1 36 0v40a6 6 0 0 0 12 0v-40a18 18 0 0 1 36 0v40a6 6 0 0 0 12 0v-40a30 30 0 0 0-30-30");
}
</style><path class="q3xvvtbcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:matrix-logo-light"} {...others} />);
}

export default Component;
