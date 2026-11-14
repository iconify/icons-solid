import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g1iijbccu {
  d: path("M3 21.5V11l2.5-5L12 2.5L18.5 6l2.5 5v10.5Z");
}

.hm5i0fbmn {
  d: path("M7.5 21.5v-9h9v9m-9-9l9 9m0-9l-9 9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g1iijbccu"/><path class="hm5i0fbmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:barn-venue"} {...others} />);
}

export default Component;
