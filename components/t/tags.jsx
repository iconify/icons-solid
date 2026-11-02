import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eb6gpabjy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 6h2c.64 0 1.36.36 2 1l4 4a1.414 1.414 0 0 1 0 2l-4 4a1.414 1.414 0 0 1-2 0l-4-4c-.64-.64-1-1.36-1-2V8a2 2 0 0 1 2-2zm1 4h.01M15 6l5 5a1.414 1.414 0 0 1 0 2l-5 5");
}
</style><path class="eb6gpabjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:tags"} {...others} />);
}

export default Component;
