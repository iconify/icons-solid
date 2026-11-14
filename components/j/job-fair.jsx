import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a_stni5md {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 9.5l2-5h14l2 5Zm1.5 0v12m15-12v12M4.5 14h15M9.75 4.5L9 9.5m5.25-5l.75 5m-7.5 7.25h9v4.75h-9Z");
}
</style><path class="a_stni5md"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:job-fair"} {...others} />);
}

export default Component;
