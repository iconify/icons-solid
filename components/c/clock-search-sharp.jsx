import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a8fc9bbgd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 11a8 8 0 1 0-8 8m0-12v4h3m6 9a2.828 2.828 0 1 1-4-4a2.828 2.828 0 0 1 4 4m0 0l2 2");
}
</style><path class="a8fc9bbgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:clock-search-sharp"} {...others} />);
}

export default Component;
