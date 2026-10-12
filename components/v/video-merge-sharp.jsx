import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gfweemjim {
  d: path("m16.49 10.35l1.77 1.3l.49.35l-.49.35l-1.77 1.3L16 14v-4z");
}

.jx656wb3c {
  d: path("M2.75 6h4l.9 1.2L11 12m-8.25 6h4l.9-1.2L11 12h2m0-5.25h8.25v10.5H13z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="jx656wb3c"/><path class="gfweemjim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:video-merge-sharp"} {...others} />);
}

export default Component;
