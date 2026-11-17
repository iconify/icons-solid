import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kyk392uym {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 14H2.095L4 3H12M4 14H20M4 14V21M12 3H20L21.904 14H20M12 3V14M20 14V21M3.048 8.5H20.952M1 21H23");
}
</style><path class="kyk392uym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:window-awning-open-sharp"} {...others} />);
}

export default Component;
