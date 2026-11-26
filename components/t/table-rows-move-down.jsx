import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nbn5x2k8h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 19.8284C3.8014 19.4046 3 18.2713 3 17L3 5C3 3.3431 4.3431 2 6 2L18 2C19.6569 2 21 3.3431 21 5L21 17C21 18.2713 20.1986 19.4046 19 19.8284M3 11L21 11M12 16V22M9 19L12 22L15 19");
}
</style><path class="nbn5x2k8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:table-rows-move-down"} {...others} />);
}

export default Component;
