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

.ob0455u5l {
  d: path("M18 19H7A5 5 0 0 1 7 9c.074-.26-.093-.762 0-1m3-3c3.359-1.868 8 .242 8 6a4 4 0 0 1 4 4c0 .587.227.498 0 1");
}

.p52u7fomt {
  stroke-opacity: 0.4;
  d: path("m2 3l19 19");
}
</style><g class="nrj6p8qat"><path class="p52u7fomt"/><path class="ob0455u5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cloud-off-duocolor"} {...others} />);
}

export default Component;
