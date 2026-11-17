import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.icqa_ebhq {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 16V8c0-.369.631-.369 1 0l3 3a1.415 1.415 0 0 1 0 2l-3 3c-.369.369-1 .369-1 0m18 0c0 .369-.631.369-1 0l-3-3a1.415 1.415 0 0 1 0-2l3-3c.369-.369 1-.369 1 0Z");
}

.uihkd04we {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12V8c0-.369.631-.369 1 0l3 3a1.414 1.414 0 0 1 0 2l-3 3c-.369.369-1 .369-1 0zm9-7v2m0 4v2m0 4v2m9-7V8c0-.369-.631-.369-1 0l-3 3a1.414 1.414 0 0 0 0 2l3 3c.369.369 1 .369 1 0z");
}
</style><g class="ft5dv1b6b"><path class="icqa_ebhq"/><path class="uihkd04we"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:flip-horizontal-duotone"} {...others} />);
}

export default Component;
