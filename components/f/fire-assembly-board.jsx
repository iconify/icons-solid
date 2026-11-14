import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qmsr1mb9y {
  d: path("M3 2.5h18V16H3ZM12 16v5.5m-3.5 0h7");
}

.qx-347bal {
  d: path("M12 5.5c2.25 2 3 3.5 3 4.75a3 3 0 0 1-6 0C9 9 9.75 7.5 12 5.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qmsr1mb9y"/><path class="qx-347bal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:fire-assembly-board"} {...others} />);
}

export default Component;
