import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hfkq_absw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 4.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-1.5 8c0-1.75 1.75-3 4-3s4 1.25 4 3m4.5-8a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-1.5 8c0-1.75 1.75-3 4-3s4 1.25 4 3M6 15.5h12M16.5 14l1.5 1.5l-1.5 1.5m1.5 2.75H6m1.5-1.5L6 19.75l1.5 1.5");
}
</style><path class="hfkq_absw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:profile-switch"} {...others} />);
}

export default Component;
