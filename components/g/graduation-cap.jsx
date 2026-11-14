import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oo1n4nbsy {
  d: path("M12 4.5L20.5 9L12 13.5L3.5 9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zaa5jibuh {
  d: path("M7 11.25v4.25c0 1.5 2.25 3 5 3s5-1.5 5-3v-4.25M20.5 9v5");
}
</style><g class="ulnmmdpxh"><path class="oo1n4nbsy"/><path class="zaa5jibuh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:graduation-cap"} {...others} />);
}

export default Component;
