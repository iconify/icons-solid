import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sylnbabtp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M3 21c0-3.314 2.239-6 5-6s5 2.686 5 6m6-9v-2h-3m3 2v5m0-5h-3m1 7a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}
</style><path class="sylnbabtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:passkey"} {...others} />);
}

export default Component;
