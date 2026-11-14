import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tbsk0yehk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.772 7.725l11.35-3.041a2.625 2.625 0 0 1 3.215 1.856l1.747 6.52a2.625 2.625 0 0 1-1.856 3.215l-11.35 3.041a2.625 2.625 0 0 1-3.215-1.856l-1.747-6.52a2.625 2.625 0 0 1 1.856-3.215M6.5 12h11");
}
</style><path class="tbsk0yehk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dutch-angle"} {...others} />);
}

export default Component;
