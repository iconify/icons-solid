import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.liiodrbas {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5v2m-2 0h4v4H5Zm-.5 4h5v7h-5Zm2.5 7v6m10-19v2m-2 0h4v4h-4Zm-.5 4h5v7h-5Zm2.5 7v6");
}
</style><path class="liiodrbas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cable-rca"} {...others} />);
}

export default Component;
