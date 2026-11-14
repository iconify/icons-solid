import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.he0ds-yfo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.806 19.811A10.5 10.5 0 0 1 12 20.5c-5 0-9-3.25-9-8h5.6m7.8 0H21c0 1.364-.33 2.604-.918 3.679M3.5 3.5l17 17");
}
</style><path class="he0ds-yfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:appetite-loss"} {...others} />);
}

export default Component;
