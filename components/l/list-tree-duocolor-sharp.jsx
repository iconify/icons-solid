import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.auf36vbch {
  d: path("M8 6h12m-8 6h8m-8 6h8");
}

.bbo2q_xwn {
  stroke-opacity: 0.4;
  d: path("M4 6v12h4m-4-6h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="bbo2q_xwn"/><path class="auf36vbch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:list-tree-duocolor-sharp"} {...others} />);
}

export default Component;
