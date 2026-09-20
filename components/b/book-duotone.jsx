import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.p2lti1bba {
  d: path("M208 32v160H72a24 24 0 0 0-24 24V56a24 24 0 0 1 24-24Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.v6b374utt {
  d: path("M208 24H72a32 32 0 0 0-32 32v168a8 8 0 0 0 8 8h144a8 8 0 0 0 0-16H56a16 16 0 0 1 16-16h136a8 8 0 0 0 8-8V32a8 8 0 0 0-8-8m-8 160H72a31.8 31.8 0 0 0-16 4.29V56a16 16 0 0 1 16-16h128Z");
}
</style><g class="cuyn6tgcc"><path class="p2lti1bba"/><path class="v6b374utt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:book-duotone"} {...others} />);
}

export default Component;
