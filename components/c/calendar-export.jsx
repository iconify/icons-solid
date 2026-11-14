import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bj2wfi-xi {
  d: path("M16.5 15.5h4v4");
}

.qs_-3fblq {
  d: path("M11.6 20.5H3.5V5h17v6.6M8 3v4m8-4v4M3.5 10h17M8 3v4m8-4v4M3.5 10h17m-5 10.5l5-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qs_-3fblq"/><path class="bj2wfi-xi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:calendar-export"} {...others} />);
}

export default Component;
