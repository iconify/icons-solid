import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aj4o3kvpm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 11c2 2 6 3.5 6 6.5c0 2.5-2.5 4-6 4s-6-1.5-6-4c0-3 4-4.5 6-6.5ZM2.5 8h19M12 11V2.5M12 5c.5-1.75 2.5-2.5 4.5-2.5C16 4.25 14 5 12 5Z");
}
</style><path class="aj4o3kvpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bulb-planting"} {...others} />);
}

export default Component;
