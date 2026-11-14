import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s-9sw5kan {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 11.5a3.25 3.25 0 0 1 .5-6a4.5 4.5 0 0 1 8.5 0a3.25 3.25 0 0 1 1 6Zm-4 10h18m-9-7.25v7.25m-2-5.25l2-2l2 2m-4 3.25l2 2l2-2");
}
</style><path class="s-9sw5kan"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cloud-ceiling"} {...others} />);
}

export default Component;
