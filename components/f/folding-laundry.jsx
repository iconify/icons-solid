import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ewhwfkqsh {
  d: path("m18.5 13.5l2 2l-2 2");
}

.nvpehtbgf {
  d: path("m19.387 10.455l.113.045l1.5-4l-5.5-3q-3.5 3-7 0L3 6.5l1.5 4l2.5-1v11h5.17M17 11.03V9.5l1.087.435M15 21.5V19a3.5 3.5 0 0 1 3.5-3.5h2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nvpehtbgf"/><path class="ewhwfkqsh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:folding-laundry"} {...others} />);
}

export default Component;
