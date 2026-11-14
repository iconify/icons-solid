import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rcrjo9bgt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m19.5 2.5l-7.5 10m-4.5 0h9m-8 0l-2 5m4.5-5l-.75 5m3.25-5l.25 5m2.25-5l1.5 5m-13 0c-2.25 0-2.25 3.75 0 3.75h15c2.25 0 2.25-3.75 0-3.75");
}
</style><path class="rcrjo9bgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:aisle-cleanup"} {...others} />);
}

export default Component;
