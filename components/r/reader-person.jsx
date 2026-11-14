import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dhzx-gtfj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 7a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0ZM3.5 20.5c0-4 3-6.25 7-6.25q.495 0 .962.039M17.75 16c-1-.75-2.25-1-3.5-.75v5.25c1.25-.25 2.5 0 3.5.75c1-.75 2.25-1 3.5-.75v-5.25c-1.25-.25-2.5 0-3.5.75Z");
}
</style><path class="dhzx-gtfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:reader-person"} {...others} />);
}

export default Component;
