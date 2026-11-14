import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mw58uovga {
  d: path("M7.05 12L12 16.95l-5.303 2.475l-2.122-2.122Zm-.707 4.243l1.414 1.414");
}

.p2nu_ybuq {
  d: path("m16.243 2.808l4.949 4.949L12 16.95L7.05 12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p2nu_ybuq"/><path class="mw58uovga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:carpenter-pencil"} {...others} />);
}

export default Component;
