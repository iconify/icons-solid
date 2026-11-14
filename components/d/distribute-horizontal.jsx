import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.il81t5t6j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4v16m19-16v16M8 6za2 2 0 0 1 2 2v8a2 2 0 0 1-2 2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2m8 2.5za2 2 0 0 1 2 2v3a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2");
}
</style><path class="il81t5t6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:distribute-horizontal"} {...others} />);
}

export default Component;
