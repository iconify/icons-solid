import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dxazypbqx {
  d: path("M10.5 19.5c0-9 3-9 3 0m-11 0h19");
}

.f15d-ccoo {
  d: path("M6.5 19.5c0-14.5 11-14.5 11 0");
}

.oh350n3eh {
  d: path("M2.5 19.5c0-19.5 19-19.5 19 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oh350n3eh"/><path class="f15d-ccoo"/><path class="dxazypbqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:anticline"} {...others} />);
}

export default Component;
