import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fwqofdcqf {
  d: path("M17 3c0 4.5-10 4.5-10 9s10 4.5 10 9M7.5 4.5h9M7 12h10m-9.5 7.5h9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hxjzx0sgy {
  d: path("M7 3c0 4.5 10 4.5 10 9S7 16.5 7 21");
}
</style><g class="hntgybcog"><path class="hxjzx0sgy"/><path class="fwqofdcqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dna-double-helix"} {...others} />);
}

export default Component;
