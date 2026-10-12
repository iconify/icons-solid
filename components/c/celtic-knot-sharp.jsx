import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rhce2gbgw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 4a8.66 8.66 0 0 0-1.9 13.29m4.39 2.56a8.66 8.66 0 0 0 6.17-.85m0 0a8.66 8.66 0 0 0-10.55-8.29m-4.42 2.52A8.66 8.66 0 0 0 3.34 19m0 0a8.66 8.66 0 0 0 12.46-4.99m.02-5.09A8.66 8.66 0 0 0 12 4");
}
</style><path class="rhce2gbgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:celtic-knot-sharp"} {...others} />);
}

export default Component;
