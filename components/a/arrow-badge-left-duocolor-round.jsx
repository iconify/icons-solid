import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b6bb_ibvs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 19h3c.738 0 1.369-.631 1-1l-5-5a1.414 1.414 0 0 1 0-2l5-5c.369-.369-.262-1-1-1h-6c-.64 0-1.36.36-2 1l-5 5a1.414 1.414 0 0 0 0 2l5 5c.64.64 1.36 1 2 1z");
}
</style><path class="b6bb_ibvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-badge-left-duocolor-round"} {...others} />);
}

export default Component;
