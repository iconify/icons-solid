import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.tw-ju_bhz {
  fill: currentColor;
  d: path("M198 224a6 6 0 0 1-6 6H64a6 6 0 0 1 0-12h128a6 6 0 0 1 6 6m-70-26a62.07 62.07 0 0 0 62-62V56a6 6 0 0 0-12 0v80a50 50 0 0 1-100 0V56a6 6 0 0 0-12 0v80a62.07 62.07 0 0 0 62 62");
}
</style><path class="tw-ju_bhz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:text-underline-light"} {...others} />);
}

export default Component;
