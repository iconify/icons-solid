import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j8yvybb9g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 6.5h7a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1Zm3.5 0V3M6 3h4m8.5 10.5c.5 1.5 3 2.5 3 5a3 3 0 0 1-6 0c0-1.5 1-2.25 1.5-3c.25 1 .75 1.5 1.25 1.5c.5-1 .5-2.25.25-3.5Z");
}
</style><path class="j8yvybb9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cng-fuel"} {...others} />);
}

export default Component;
