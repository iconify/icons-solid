import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.psv3yebmi {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 14h.01");
}

.qa4zveyod {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 18.75V3.517l1.76.073a17 17 0 0 1 15.15 15.15l.073 1.76H3.5z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="qa4zveyod"/><path class="psv3yebmi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:circle-sharp"} {...others} />);
}

export default Component;
