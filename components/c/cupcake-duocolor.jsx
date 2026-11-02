import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.no003qbta {
  d: path("M5 14h14l-1 5c-.24 1.18-.9 2-2 2H8c-1.1 0-1.76-.82-2-2zm5 0v7m4-7v7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.v4oxz9pfj {
  stroke-opacity: 0.4;
  d: path("M19 14c2.998-1.706 2.356-6.202-1-7c-.115-2.5-2.74-4.075-5-3a5 5 0 0 0-8 4c-2.567 1.176-2.567 4.824 0 6");
}
</style><g class="nrj6p8qat"><path class="v4oxz9pfj"/><path class="no003qbta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cupcake-duocolor"} {...others} />);
}

export default Component;
