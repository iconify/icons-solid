import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dvo8zdbki {
  d: path("M5 6.5a3 3 0 0 1 6 0C11 8 10.25 9 9.5 10h5c2 0 3.75-.5 5.75-2c.75 4.75-1.75 8.5-6.75 8.5H9c-3.5 0-5.5-2-5.5-4c0-1.5 1-2.25 3-2.5C5.5 9 5 8 5 6.5Z");
}

.myq867byu {
  d: path("M5.25 6.25L3 7.5l2.5 1.25Zm3.25 0h.01M3.5 19.5H10m3 0h7.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dvo8zdbki"/><path class="myq867byu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:duck-pet"} {...others} />);
}

export default Component;
