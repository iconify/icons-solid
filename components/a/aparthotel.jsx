import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a0raeocut {
  d: path("M7.25 21.5v-5h3v5m4.25-1.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm3-1.25l3.75-3.75m-1.5 1.5l1.5 1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zyh9btfvh {
  d: path("M12 21.5H3.5v-19H16v12.7M7.5 6.5h.01m4.49 0h.01M7.5 11h.01M12 11h.01");
}
</style><g class="ulnmmdpxh"><path class="zyh9btfvh"/><path class="a0raeocut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:aparthotel"} {...others} />);
}

export default Component;
