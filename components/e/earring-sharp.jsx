import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jb8wwbf-o {
  cx: 12px;
  cy: 10px;
  r: 1.25px;
}

.ko01rhb0b {
  d: path("M9.75 5.25a2.25 2.25 0 1 1 4.5 0C14.25 6.75 12 7 12 8.75");
}

.qshguqwpp {
  d: path("M12 11.25c3 3 4 4.5 4 6a4 4 0 0 1-8 0c0-1.5 1-3 4-6Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ko01rhb0b"/><circle class="jb8wwbf-o"/><path class="qshguqwpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:earring-sharp"} {...others} />);
}

export default Component;
