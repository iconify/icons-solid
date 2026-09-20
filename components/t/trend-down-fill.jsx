import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.u6ta87b6u {
  fill: currentColor;
  d: path("M240 128v64a8 8 0 0 1-8 8h-64a8 8 0 0 1-5.66-13.66L188.69 160L136 107.31l-34.34 34.35a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L96 124.69l34.34-34.35a8 8 0 0 1 11.32 0L200 148.69l26.34-26.35A8 8 0 0 1 240 128");
}
</style><path class="u6ta87b6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:trend-down-fill"} {...others} />);
}

export default Component;
