import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hdsckdb4f {
  d: path("M6.5 7h8M9 3.25c2.25 2.25 2.25 5.25 0 7.5M3 17.5h.01m.74-4.75h.01M13.5 15h8m-7 0l1.5 5.5h3l1.5-5.5");
}

.lf0-u1c8y {
  d: path("M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lf0-u1c8y"/><path class="hdsckdb4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:alley-oop"} {...others} />);
}

export default Component;
