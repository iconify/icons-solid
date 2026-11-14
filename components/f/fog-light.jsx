import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nj7lxkb_t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 5.5v13c-4.5 0-7.5-3-7.5-6.5s3-6.5 7.5-6.5Zm3 2.25q2-1.5 4 0t4 0M13 12q2-1.5 4 0t4 0m-8 4.25q2-1.5 4 0t4 0");
}
</style><path class="nj7lxkb_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:fog-light"} {...others} />);
}

export default Component;
