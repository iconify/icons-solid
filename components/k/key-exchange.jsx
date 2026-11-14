import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v8q65abie {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.75 7.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0m1 2.75L4.5 19.5m3-3l2 2m.5-5l2 2m3 .75h6m-1.75-1.75L21 16.25L19.25 18M21 19.75h-6M16.75 18L15 19.75l1.75 1.75");
}
</style><path class="v8q65abie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:key-exchange"} {...others} />);
}

export default Component;
