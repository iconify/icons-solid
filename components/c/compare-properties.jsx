import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cvufeubyu {
  d: path("M2.5 10.5L6.25 5L10 10.5V20H2.5ZM14 4h7.5v16H14Zm-2-1.5v19");
}

.q3d1u2b5w {
  d: path("M4.75 20v-3.5h3V20m8.5-12.5h.01m2.99 0h.01M16.25 11h.01m2.99 0h.01m-3.01 9v-3.5h3V20");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cvufeubyu"/><path class="q3d1u2b5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:compare-properties"} {...others} />);
}

export default Component;
