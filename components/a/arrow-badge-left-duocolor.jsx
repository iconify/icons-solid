import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fzyx49bzz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 19h4c.369 0 .369-.631 0-1l-5-5a1.414 1.414 0 0 1 0-2l5-5c.369-.369.369-1 0-1h-8l-6 6a1.414 1.414 0 0 0 0 2l6 6z");
}
</style><path class="fzyx49bzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-badge-left-duocolor"} {...others} />);
}

export default Component;
