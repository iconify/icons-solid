import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cf28hclcm {
  d: path("M6 14h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2");
}

.cuyn6tgcc {
  fill: currentColor;
}

.j-n0vnxfs {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 12a4 4 0 1 1 8 0a4 4 0 0 1-8 0m12 0a4 4 0 1 1 8 0a4 4 0 0 1-8 0");
}
</style><g class="cuyn6tgcc"><path class="j-n0vnxfs"/><path class="cf28hclcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:voicemail-bulk"} {...others} />);
}

export default Component;
