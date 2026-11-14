import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.izbhmoipm {
  d: path("M2.5 20.5H8V15h5.5V9.5H19V4h2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zgrlzwmil {
  d: path("M5.25 17.75v-5.5h5.5");
}
</style><g class="ulnmmdpxh"><path class="izbhmoipm"/><path class="zgrlzwmil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:stair-nosing"} {...others} />);
}

export default Component;
