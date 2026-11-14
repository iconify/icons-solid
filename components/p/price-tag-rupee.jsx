import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iuec432cz {
  d: path("M11.5 9.25c4 0 4 4.25 0 4.25L16 17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zjh3stbhj {
  d: path("M8.5 4.5h11v15h-11l-5-7.5ZM8.25 12h.01m2.99-2.75h5.5m-5.5 2.5h5.5");
}
</style><g class="ulnmmdpxh"><path class="zjh3stbhj"/><path class="iuec432cz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:price-tag-rupee"} {...others} />);
}

export default Component;
