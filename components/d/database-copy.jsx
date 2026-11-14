import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.av_2ehawl {
  d: path("M3 9a6.5 2.5 0 1 0 13 0A6.5 2.5 0 1 0 3 9");
}

.co_gj4azy {
  d: path("M10 3.2A6.5 2.5 0 0 1 21 5v10a6.5 2.5 0 0 1-2.25 1.9");
}

.d6qw6eo4b {
  d: path("M3 9v9.5a6.5 2.5 0 0 0 13 0V9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="av_2ehawl"/><path class="d6qw6eo4b"/><path class="co_gj4azy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:database-copy"} {...others} />);
}

export default Component;
