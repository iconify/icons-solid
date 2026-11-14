import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ioiqfubdz {
  d: path("M2.5 10.5a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2V16a2 2 0 0 1-2 2H9l-3.5 3v-3h-1a2 2 0 0 1-2-2Z");
}

.r8s-8ybkc {
  d: path("M8 5.75V4.5a2 2 0 0 1 2-2h9.5a2 2 0 0 1 2 2V11a2 2 0 0 1-2 2h-.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ioiqfubdz"/><path class="r8s-8ybkc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:message-disappearing"} {...others} />);
}

export default Component;
