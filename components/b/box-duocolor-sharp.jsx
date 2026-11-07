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

.pqg7h7bjb {
  d: path("m12 2l9 4.444v11.112L12 22l-9-4.444V6.444z");
}

.qbr6jfbcq {
  stroke-opacity: 0.4;
  d: path("m3 6.444l9 4.445l9-4.445m-9 4.445V22");
}
</style><g class="nrj6p8qat"><path class="qbr6jfbcq"/><path class="pqg7h7bjb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:box-duocolor-sharp"} {...others} />);
}

export default Component;
