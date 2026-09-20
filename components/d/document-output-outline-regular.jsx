import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.jpf4_0b1i {
  d: path("M9 12h5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zy1jzxj5t {
  d: path("M12.5 9.5 15 12l-2.5 2.5");
}
</style><g class="nrj6p8qat"><path class="abnm6smsv"/><path class="jpf4_0b1i"/><path class="zy1jzxj5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:document-output-outline-regular"} {...others} />);
}

export default Component;
