import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r_8qwlbyl {
  d: path("M4.5 11.5h15v9h-15Zm0-3l7.5-5l7.5 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uz7xebdng {
  d: path("M7.25 14.25h9.5v3.5h-9.5ZM4.5 13h-2m2 3h-2m2 3h-2m17-6h2m-2 3h2m-2 3h2");
}
</style><g class="ulnmmdpxh"><path class="r_8qwlbyl"/><path class="uz7xebdng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:carpet-boost"} {...others} />);
}

export default Component;
