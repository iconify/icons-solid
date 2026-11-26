import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.orj_klbew {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 4.001L11.998 6.75L7 9.499L2.002 6.75ZM1.4472 12.0326L7 14.809L12.5528 12.0326M1.4472 17.2826L7 20.059L12.5528 17.2826M19 22L19 3M15.7071 6.2929L19 3L22.2929 6.2929");
}
</style><path class="orj_klbew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:layer-arrow-up-sharp"} {...others} />);
}

export default Component;
