import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aqhok2bbj {
  cx: 12px;
  cy: 12px;
  r: 4px;
}

.dfn6wy35j {
  d: path("M7.75 10.75L4 7.5L2.77 6.399L2.75 8.05v7.9l.02 1.651L4 16.5l3.75-3.25Zm8.5 0L20 7.5l1.23-1.101l.02 1.651v7.9l-.02 1.651L20 16.5l-3.75-3.25Zm-6-1.5l2.679 1.786L12 14.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="aqhok2bbj"/><path class="dfn6wy35j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:candy-sharp"} {...others} />);
}

export default Component;
