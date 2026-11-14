import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.odv024bxy {
  d: path("M3.5 15q2.5 2 5 0t5 0t7 0M8 11.5V8m4 3.5V8m4 3.5V8M8 5.5h.01m3.99 0h.01m3.99 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yj5n5kpjo {
  d: path("M3.5 11.5h17v9h-17Z");
}
</style><g class="ulnmmdpxh"><path class="yj5n5kpjo"/><path class="odv024bxy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:birthday-cake"} {...others} />);
}

export default Component;
