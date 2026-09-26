import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rem1nn86g {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M22.2781 2.7682L13 10.5L7.5 6.5L1.7071 12.2929M4 22L4 16M8 22L8 11M12 22L12 14M16 22L16 12.5M20 22L20 9");
}
</style><path class="rem1nn86g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-no-axes-combined-sharp"} {...others} />);
}

export default Component;
