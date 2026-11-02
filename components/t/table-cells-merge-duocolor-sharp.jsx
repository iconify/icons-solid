import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n3ijmobdd {
  stroke-opacity: 0.4;
  d: path("M12 4v5m0 6v5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zgxuderfk {
  d: path("M4 4h16v16H4Zm0 5h16M4 15h16");
}
</style><g class="nrj6p8qat"><path class="n3ijmobdd"/><path class="zgxuderfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:table-cells-merge-duocolor-sharp"} {...others} />);
}

export default Component;
