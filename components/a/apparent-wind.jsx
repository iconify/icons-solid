import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lusuv4q0w {
  d: path("M6.75 7.25L9 9.5l-2.25 2.25");
}

.se99mzbvt {
  d: path("M12 3.5v11h6.5ZM5 17h14.5l-2 3H7ZM3.5 4q0 5.5 5.5 5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="se99mzbvt"/><path class="lusuv4q0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:apparent-wind"} {...others} />);
}

export default Component;
