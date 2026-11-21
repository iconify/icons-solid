import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sc82anb-n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 8L11.2572 4.2971C11.734 4.1064 12.266 4.1064 12.7428 4.2971L22 8M12 4V2M4 8L5.7215 18.3288C5.8822 19.2932 6.7166 20 7.6943 20L16.3057 20C17.2834 20 18.1178 19.2932 18.2785 18.3288L20 8M10 10H14M12 20V22");
}
</style><path class="sc82anb-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:beehouse"} {...others} />);
}

export default Component;
