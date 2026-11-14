import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l60tftbgq {
  d: path("M12 6.5c-2 0-5 .5-5 2.75m5 1.25c-2 0-5 .5-5 2.75m5 1.25c-2 0-5 .5-5 2.75M12 6.5c2 0 5 .5 5 2.75m-5 1.25c2 0 5 .5 5 2.75m-5 1.25c2 0 5 .5 5 2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vbc61sowg {
  d: path("M3 2.5h18v19H3ZM12 5v13.5");
}
</style><g class="ulnmmdpxh"><path class="vbc61sowg"/><path class="l60tftbgq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:xray-chest"} {...others} />);
}

export default Component;
