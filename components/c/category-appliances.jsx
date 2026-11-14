import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.klpny775a {
  d: path("M5 2.5h14v19H5Zm0 6h14");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uxpb_bbre {
  d: path("M9 15a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM8 5.5h.01");
}
</style><g class="ulnmmdpxh"><path class="klpny775a"/><path class="uxpb_bbre"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:category-appliances"} {...others} />);
}

export default Component;
