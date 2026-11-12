import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wx9p5uqgi {
  stroke-opacity: 0.4;
  d: path("M12 17a5 5 0 1 0 10 0a5 5 0 0 0-10 0m5-2v2h2");
}

.zitfg43nb {
  d: path("M8 20a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4");
}
</style><g class="nrj6p8qat"><path class="wx9p5uqgi"/><path class="zitfg43nb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:note-clock-corner-duocolor-round"} {...others} />);
}

export default Component;
