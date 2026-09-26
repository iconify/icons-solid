import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rqx5yqbct {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 2L6 2L18 2L19 2M5 7L6 7L18 7L19 7M15 1L15 2C15 5.9361 12.6333 9.4861 9 11L6 11L16 22L16.2976 22.3273");
}
</style><path class="rqx5yqbct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:indian-rupee-sharp-fill"} {...others} />);
}

export default Component;
