import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kvzvug-hy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.625 3h6.25A2.625 2.625 0 0 1 15.5 5.625v12.75A2.625 2.625 0 0 1 12.875 21h-6.25A2.625 2.625 0 0 1 4 18.375V5.625A2.625 2.625 0 0 1 6.625 3M15.5 5l4 1.25v13.5l-4 1.25M7 7.5h5.5m-5.5 4h3.5");
}
</style><path class="kvzvug-hy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:policy-booklet"} {...others} />);
}

export default Component;
