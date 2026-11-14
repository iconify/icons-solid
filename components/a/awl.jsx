import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kjfero6xq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.818 16.646l2.828-2.828a2.5 2.5 0 0 1 3.536 0a2.5 2.5 0 0 1 0 3.536l-2.828 2.828a2.5 2.5 0 0 1-3.536 0a2.5 2.5 0 0 1 0-3.536m6.432-2.896L21 3");
}
</style><path class="kjfero6xq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:awl"} {...others} />);
}

export default Component;
