import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m5k9kkpwo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12c-2.5-3.5-6-4-7.5-2q-2.25 3 0 6c1.5 2 5 1.5 7.5-4s6-6 7.5-4q2.25 3 0 6c-1.5 2-5 1.5-7.5-2Z");
}
</style><path class="m5k9kkpwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:infinity-symbol"} {...others} />);
}

export default Component;
