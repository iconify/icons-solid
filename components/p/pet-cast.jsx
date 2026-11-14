import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gip4fkbjq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 10.25H7a2.5 2.5 0 1 0-4 0q1.5 1.75 0 3.5a2.5 2.5 0 1 0 4 0h3.25m3.5-3.5H17a2.5 2.5 0 1 1 4 0q-1.5 1.75 0 3.5a2.5 2.5 0 1 1-4 0h-3.25m-3.5-6.25h3.5v9h-3.5Z");
}
</style><path class="gip4fkbjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pet-cast"} {...others} />);
}

export default Component;
