import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.afyrgo1iq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.5 16.5l1.25-3.75l7-7l2.5 2.5l-7 7Zm1.25-3.75l2.5 2.5M2.5 18.5c1.25-2.75 2.75-2.75 3.25-.5s2 2.5 3 1");
}
</style><path class="afyrgo1iq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:handwriting-recognition"} {...others} />);
}

export default Component;
