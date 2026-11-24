import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l6_b32bel {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 21h18M8 21V6a1 1 0 0 1 1-1h1V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h1a1 1 0 0 1 1 1v15M12 8h.01M12 12h.01M12 16h.01");
}
</style><path class="l6_b32bel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:skyscraper"} {...others} />);
}

export default Component;
