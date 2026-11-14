import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qakfjpo1e {
  d: path("M8 4h8l4 5.5L12 21L4 9.5ZM4 9.5h16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wphvxrb5q {
  d: path("M12 21L9 9.5L11 4");
}
</style><g class="ulnmmdpxh"><path class="qakfjpo1e"/><path class="wphvxrb5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:category-jewelry"} {...others} />);
}

export default Component;
