import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.luizktz3k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 7.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Zm-1.75 13c0-4 2.5-6 5.5-6s5.5 2 5.5 6m.75-11a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm1 6.25c2.5-1.5 6.25-.25 6.25 3.75");
}
</style><path class="luizktz3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:volunteer-befriending"} {...others} />);
}

export default Component;
