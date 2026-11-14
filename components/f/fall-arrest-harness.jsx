import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.om9mknbjc {
  d: path("m6.5 2.5l3 4.5m8-4.5l-3 4.5m-5 0h5v1.5a2.5 2.5 0 0 1-5 0Z");
}

.rf3v3oblj {
  d: path("M9.75 9.75L6.5 15v6.5m7.75-11.75L17.5 15v6.5M3.5 15h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="om9mknbjc"/><path class="rf3v3oblj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:fall-arrest-harness"} {...others} />);
}

export default Component;
