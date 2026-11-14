import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mqe6zouky {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.95 7.489l.648 2.723m.51 2.141l.139.583m-.224 1.95l-.379.705m8.548-7.253l-.269.647m-.06 2.053l.199.567m.726 2.076l.859 2.454M4.75 3.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm12 .5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm-13 16.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm14-.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM7.5 14a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm3.5-2a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm3.5-2a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}
</style><path class="mqe6zouky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:constellation-orion"} {...others} />);
}

export default Component;
