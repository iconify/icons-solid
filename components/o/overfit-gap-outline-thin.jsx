import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.id4vqxf8c {
  d: path("m4 14 5 -5h11");
}

.qlw91sbif {
  d: path("m4 19 5 -5h4l4 4");
}
</style><g class="hntgybcog"><path class="id4vqxf8c"/><path class="qlw91sbif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:overfit-gap-outline-thin"} {...others} />);
}

export default Component;
