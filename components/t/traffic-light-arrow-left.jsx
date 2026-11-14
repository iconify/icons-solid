import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gw__ijwvb {
  d: path("m11 14.5l-2 2l2 2");
}

.sn53yvl9w {
  d: path("M7.5 2h9v20h-9ZM12 6h.01M12 10h.01M15 16.5H9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sn53yvl9w"/><path class="gw__ijwvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:traffic-light-arrow-left"} {...others} />);
}

export default Component;
