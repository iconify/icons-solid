import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n4a5dnbfz {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 23L3 12L21 12L21 22L14 22L14 11M21 17L14 17M12 12L12 8M7 8L7 2L17 2L17 8L7 8Z");
}
</style><path class="n4a5dnbfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:desk-office-sharp"} {...others} />);
}

export default Component;
