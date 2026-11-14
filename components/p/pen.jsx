import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.coy827b5i {
  d: path("m12 2.5l6.5 7L16 18H8L5.5 9.5Zm0 0v7.25");
}

.f97k-1bzn {
  d: path("M10 11.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM8 21h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="coy827b5i"/><path class="f97k-1bzn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pen"} {...others} />);
}

export default Component;
