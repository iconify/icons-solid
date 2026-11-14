import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.awe7g9bez {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 5.75a3 3.5 0 1 0 6 0a3 3.5 0 1 0-6 0ZM3.75 11a3 3.5 0 1 0 6 0a3 3.5 0 1 0-6 0Zm10.5 0a3 3.5 0 1 0 6 0a3 3.5 0 1 0-6 0Zm-7.5 3.5L12 21m5.25-6.5L12 21m0-11.75V21");
}
</style><path class="awe7g9bez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:balloons-bunch"} {...others} />);
}

export default Component;
