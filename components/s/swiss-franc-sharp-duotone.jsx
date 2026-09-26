import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vkkuh9ebd {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 2L18 2L9 2L9 22L9 23M8 11L9 11L16 11L17 11M5 16L6 16L14 16L15 16");
}
</style><path class="vkkuh9ebd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:swiss-franc-sharp-duotone"} {...others} />);
}

export default Component;
