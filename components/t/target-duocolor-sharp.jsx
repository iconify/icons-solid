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

.ujawvmq4f {
  stroke-opacity: 0.4;
  d: path("M12 12h.01");
}

.xha28jbkf {
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m4 0a5 5 0 0 1 10 0m0 0a5 5 0 0 1-10 0");
}
</style><g class="nrj6p8qat"><path class="ujawvmq4f"/><path class="xha28jbkf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:target-duocolor-sharp"} {...others} />);
}

export default Component;
