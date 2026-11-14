import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.coget2yzu {
  d: path("M3 8.5a9 2.5 0 1 0 18 0a9 2.5 0 1 0-18 0Z");
}

.qrxxeacvm {
  d: path("M3 8.5L5.25 17q.5 1.5 2 1.5h9.5q1.5 0 2-1.5L21 8.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="coget2yzu"/><path class="qrxxeacvm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dog-bowl-empty"} {...others} />);
}

export default Component;
