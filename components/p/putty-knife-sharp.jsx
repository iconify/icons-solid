import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eaqcqwbpl {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 2.75h5v9h-5z");
}

.gy7rnxzfe {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 5.5h.01");
}

.s4df5hbdi {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 11.5h4l.38.93l3.24 7.89l.38.93h-13l.38-.93l3.24-7.89l.38-.93z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="eaqcqwbpl"/><path class="gy7rnxzfe"/><path class="s4df5hbdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:putty-knife-sharp"} {...others} />);
}

export default Component;
