import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.otjotobuf {
  d: path("M7.25 7.25h6m-6 3.5h3.5m9.56-1.25l-.81-.81q-.71-.71-1.42 0l-5.51 5.51q-.71.71 0 1.42l.81.81q.71.71 1.42 0l5.51-5.51q.71-.71 0-1.42m-6.64 7.22l-1.39-1.39q-.42-.42-.73.09l-1.43 2.37q-.31.51.11.93l.05.05q.42.42.93.11l2.37-1.43q.51-.31.09-.73m3.88-3.04l-2.23-2.23");
}

.qgdnzitms {
  width: 13px;
  height: 18.5px;
  x: 3.75px;
  y: 2.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="qgdnzitms"/><path class="otjotobuf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pen-paper"} {...others} />);
}

export default Component;
