import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mazbq-btn {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M22 19L22 18C22 11.6487 16.8513 6.5 10.5 6.5C7.45 6.5 4.5249 7.7116 2.3683 9.8683L2 10.2365M2 5L2 10.2365L7.2365 10.2365");
}
</style><path class="mazbq-btn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:undo-sharp"} {...others} />);
}

export default Component;
