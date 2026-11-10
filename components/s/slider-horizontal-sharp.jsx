import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zj6y9i7fh {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 19C20 17.34 18.657 16 17 16H15C13.343 16 12 17.34 12 19M20 19C20 20.66 18.657 22 17 22H15C13.343 22 12 20.66 12 19M20 19H23M12 19H1M2 2V12H22V2H2Z");
}
</style><path class="zj6y9i7fh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:slider-horizontal-sharp"} {...others} />);
}

export default Component;
