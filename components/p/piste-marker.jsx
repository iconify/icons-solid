import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xmojf-bbr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.125 2.5h7.75A2.625 2.625 0 0 1 18.5 5.125v4.75a2.625 2.625 0 0 1-2.625 2.625h-7.75A2.625 2.625 0 0 1 5.5 9.875v-4.75A2.625 2.625 0 0 1 8.125 2.5M12 12.5v6m-.3 0h.6a.866.866 0 0 1 .7 1.375a1.236 1.236 0 0 1-2 0a.866.866 0 0 1 .7-1.375");
}
</style><path class="xmojf-bbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:piste-marker"} {...others} />);
}

export default Component;
