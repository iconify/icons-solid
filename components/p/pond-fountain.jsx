import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e91lwqb7s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17.5a9.5 3.5 0 1 0 19 0a9.5 3.5 0 1 0-19 0Zm9.5 0V4M9.25 5.5Q6 6 5 11.5m9.75-6Q18 6 19 11.5");
}
</style><path class="e91lwqb7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pond-fountain"} {...others} />);
}

export default Component;
