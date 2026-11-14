import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.emw14kl7e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.5H13v7H2.5Zm0 2.5H13m2.622-2.521a7.5 7.5 0 0 1 0 7.042m2.428-8.333a10.25 10.25 0 0 1 0 9.624m2.428-10.915a13 13 0 0 1 0 12.206");
}
</style><path class="emw14kl7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:card-contactless"} {...others} />);
}

export default Component;
