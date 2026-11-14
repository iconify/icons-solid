import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.on-f2cbme {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 17a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m5 0V3M12 3h9.5M12 7h9.5M12 11h9.5m-4.75 4.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-2 6.25c0-1.5 1.5-2.25 3.5-2.25s3.5.75 3.5 2.25");
}
</style><path class="on-f2cbme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:collaborative-playlist"} {...others} />);
}

export default Component;
