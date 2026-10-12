import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m64yk7scf {
  d: path("M4.5 12.9V8.25l.49-.34l6.52-4.57L12 3l.49.34l6.52 4.57l.49.34v5.25h-15z");
}

.rlt3v3_6z {
  d: path("M10.5 13.5V10h3v3.5m-7 .5v7.25M12 14v7.25M17.5 14v7.25m-14.75-3c1.156 0 1.156-1 2.313-1s1.156 1 2.312 1s1.156-1 2.313-1s1.156 1 2.312 1s1.156-1 2.313-1s1.156 1 2.312 1s1.156-1 2.313-1s1.156 1 2.312 1");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="m64yk7scf"/><path class="rlt3v3_6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:stilt-house-sharp"} {...others} />);
}

export default Component;
