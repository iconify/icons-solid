import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ti6-rx_sk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 21H5a2 2 0 0 1-2-2V9l6-4a5.41 5.41 0 0 1 6 0l6 4v10a2 2 0 0 1-2 2zM3 9l5 5c.64.64 1.36 1 2 1h4c.64 0 1.36-.36 2-1l5-5");
}
</style><path class="ti6-rx_sk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mail-open"} {...others} />);
}

export default Component;
