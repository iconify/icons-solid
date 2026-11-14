import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oqcj5ybzo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 2.5h3.5a4.75 4.75 0 0 1 4.75 4.75A4.75 4.75 0 0 1 13.75 12h-3.5A4.75 4.75 0 0 1 5.5 7.25a4.75 4.75 0 0 1 4.75-4.75M12 12v9.5M12 5v4.5m3.5 6l5 5m0-5l-5 5");
}
</style><path class="oqcj5ybzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:purchase-offer-rejected"} {...others} />);
}

export default Component;
