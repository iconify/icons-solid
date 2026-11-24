import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.euhic3bot {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M18 3a2 2 0 0 1 2 2v16l-4-2l-4 2l-4-2l-4 2V5a2 2 0 0 1 2-2Z");
}

.ft5dv1b6b {
  fill: none;
}

.j69gk7qqd {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3h6a2 2 0 0 1 2 2v16l-4-2l-4 2l-4-2l-4 2V5a2 2 0 0 1 2-2zM8 7h8m-8 4h8m-8 4h4");
}
</style><g class="ft5dv1b6b"><path class="euhic3bot"/><path class="j69gk7qqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:receipt-duotone"} {...others} />);
}

export default Component;
