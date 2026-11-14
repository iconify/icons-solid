import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sv0524byh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5A9.5 9.5 0 1 1 2.5 12m.573-3.249a9.5 9.5 0 0 1 5.678-5.678M9.25 14.75l5.5-5.5M9.5 9.5h.01m4.99 5h.01");
}
</style><path class="sv0524byh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:survey-response-rate"} {...others} />);
}

export default Component;
