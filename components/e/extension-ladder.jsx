import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ve3vcn0ez {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5v19m8-19v19m-8-15h8m-8 5.5h8m-8 5.5h8m6-14v17M16 6l2.5-2.5L21 6m-5 12l2.5 2.5L21 18");
}
</style><path class="ve3vcn0ez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:extension-ladder"} {...others} />);
}

export default Component;
