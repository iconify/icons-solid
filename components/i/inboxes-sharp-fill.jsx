import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f1o1bqchu {
  d: path("M6 13H10L12 16H16L18 13H22M2 14V8.155L4.548 4H14.773M8.547 8H19.452L22 12.155V20H6V12.155L8.547 8Z");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ml8m-6dni {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6 13H10L12 16H16L18 13H22V20H6V13Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="ml8m-6dni"/><path class="f1o1bqchu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:inboxes-sharp-fill"} {...others} />);
}

export default Component;
