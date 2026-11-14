import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zuakx0b9d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 3.5c3 0 3.25 4.25.25 4.25c-1.5 0-1.5-2 0-1.75c3.25.75 3 5.75 0 5.75c-1.5 0-1.5-2 0-1.75c3.25.75 3 5.75 0 5.75c-1.5 0-1.5-2 0-1.75c3.25.75 3 6.5-.25 6.5m8-17c3 0 3.25 4.25.25 4.25c-1.5 0-1.5-2 0-1.75c3.25.75 3 5.75 0 5.75c-1.5 0-1.5-2 0-1.75c3.25.75 3 5.75 0 5.75c-1.5 0-1.5-2 0-1.75c3.25.75 3 6.5-.25 6.5");
}
</style><path class="zuakx0b9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hair-curly"} {...others} />);
}

export default Component;
