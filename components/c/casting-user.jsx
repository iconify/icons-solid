import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vjzoz1b_v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 7.25a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM3 21c0-4 3.25-6.75 7.5-6.75c1.171 0 2.266.209 3.238.595M16.5 18.25A2.75 2.75 0 0 1 19.25 21m-2.75-5.25A5.25 5.25 0 0 1 21.75 21m-5.25 0h.01");
}
</style><path class="vjzoz1b_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:casting-user"} {...others} />);
}

export default Component;
