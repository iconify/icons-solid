import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cqwddlb4r {
  d: path("M8.5 4Q10 8 12 6.5Q14 8 15.5 4M12 10h.01M12 13h.01M12 16h.01");
}

.i2_i0ybql {
  d: path("M8.5 4L4 6l-1.5 8h4L7 9v10.5h10V9l.5 5h4L20 6l-4.5-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i2_i0ybql"/><path class="cqwddlb4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:blouse"} {...others} />);
}

export default Component;
