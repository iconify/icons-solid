import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c94t25c8f {
  d: path("M4.25 3.75h15.5v14.5H4.25z");
}

.jj3b43h6z {
  d: path("M7.5 7h3v2.5h-3Zm6 0h3v2.5h-3Zm-6 5.5h3V15h-3Zm6 0h3V15h-3ZM3.25 18.25h17.5v2.5H3.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="c94t25c8f"/><path class="jj3b43h6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:window-frame-sharp"} {...others} />);
}

export default Component;
