import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a-p6as2ow {
  d: path("M8.25 6.5h7.5L14.5 11h-5Z");
}

.b0wwv9blu {
  d: path("m5.124 4.227l3.447.607L6.14 18.622l-3.447-.608Zm10.305.607l3.447-.607l2.431 13.787l-3.447.608Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a-p6as2ow"/><path class="b0wwv9blu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:drawknife"} {...others} />);
}

export default Component;
