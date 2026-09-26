import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r0834k1ze {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 19L6 6M1.7071 10.2929L6 6L10.2929 10.2929M13 6L17 6M13 10L19 10M13 14L21 14M13 18L23 18");
}
</style><path class="r0834k1ze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-up-narrow-wide-sharp-fill"} {...others} />);
}

export default Component;
