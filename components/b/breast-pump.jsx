import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q3d69kbeh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 11.5h8v10H6ZM7 9h6v2.5H7Zm1.5 0q-2.25-2.25-6-2.25V2.5c3.75 0 7.25 2.25 9.25 6.5M14 14q4.5 0 6 3v4.5");
}
</style><path class="q3d69kbeh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:breast-pump"} {...others} />);
}

export default Component;
