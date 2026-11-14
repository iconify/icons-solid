import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g-lk__-um {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.75 4a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-.25 4.5l-2.5 6m0 0l3.5 2l-1 4.5M11 14.5L9.5 18l-4 1m8-10.5L16 11l2.5-1m-5-1.5H10L8 11m8.5 7.5h5m-2-2l2 2l-2 2");
}
</style><path class="g-lk__-um"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:sprint-dev"} {...others} />);
}

export default Component;
