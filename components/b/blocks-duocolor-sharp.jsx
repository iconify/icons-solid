import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gd1b5kq4f {
  d: path("M3 7h7v7h7v7H3zm7 7v7m-7-7h7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o6njlubaq {
  stroke-opacity: 0.4;
  d: path("M14 3h7v7h-7Z");
}
</style><g class="nrj6p8qat"><path class="o6njlubaq"/><path class="gd1b5kq4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:blocks-duocolor-sharp"} {...others} />);
}

export default Component;
