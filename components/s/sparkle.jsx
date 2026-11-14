import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p53006btj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5c.5 5.75 2.75 8.75 7.5 9.5c-4.75.75-7 3.75-7.5 9.5c-.5-5.75-2.75-8.75-7.5-9.5c4.75-.75 7-3.75 7.5-9.5Z");
}
</style><path class="p53006btj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:sparkle"} {...others} />);
}

export default Component;
