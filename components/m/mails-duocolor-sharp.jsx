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

.v1yjf7bhh {
  stroke-opacity: 0.4;
  d: path("M7 5V3h14v12");
}

.ztbg_oopf {
  d: path("M3 9h14v12H3Zm0 0l6 6h2l6-6");
}
</style><g class="nrj6p8qat"><path class="v1yjf7bhh"/><path class="ztbg_oopf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mails-duocolor-sharp"} {...others} />);
}

export default Component;
