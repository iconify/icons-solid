import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h6hogib4u {
  d: path("M11.2 21H3V4.5h18v6.8M3 9.5h18m-13-7v4m8-4v4m-8.5 7h.01m-.01 4h.01");
}

.rv-r-l3wy {
  d: path("M14 15h5.5v7H14Zm7.75-.5l-4.25 4.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h6hogib4u"/><path class="rv-r-l3wy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:contract-calendar"} {...others} />);
}

export default Component;
