import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nr2zicbcp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 6L6 5C6 3.8954 6.8954 3 8 3L16 3C17.1046 3 18 3.8954 18 5L18 6M12 3L12 11M9 11L15 11M3 18L13 18M21 18L17 18M17 15L17 21");
}
</style><path class="nr2zicbcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:type-variable"} {...others} />);
}

export default Component;
