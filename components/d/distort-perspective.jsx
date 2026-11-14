import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nhe1cqbxb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.866 4h6.268a1.75 1.75 0 0 1 1.697 1.326l3.125 12.5A1.75 1.75 0 0 1 18.259 20H5.741a1.75 1.75 0 0 1-1.697-2.174l3.125-12.5A1.75 1.75 0 0 1 8.866 4M12 4v16m-6.5-8h13");
}
</style><path class="nhe1cqbxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:distort-perspective"} {...others} />);
}

export default Component;
