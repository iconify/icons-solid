import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tyz9vfbsp {
  d: path("M6.5 16.5a9.5 3.5 0 0 1-4-2.75v-4a9.5 3.5 0 0 1 19 0v4a9.5 3.5 0 0 1-4 2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zvrbwjb_p {
  d: path("M2.5 9.75a9.5 3.5 0 0 0 4 2.75m11 0a9.5 3.5 0 0 0 4-2.75m-15 1h11v6.75h-11Z");
}
</style><g class="ulnmmdpxh"><path class="tyz9vfbsp"/><path class="zvrbwjb_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:security-wristband"} {...others} />);
}

export default Component;
