import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.crysd7zol {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 8A8.944 8.944 0 0 0 4 8m4 0H4V4m0 12a8.944 8.944 0 0 0 16 0m-4 0h4v4M12 8v5m0 3h.01");
}
</style><path class="crysd7zol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:reload-warning-sharp"} {...others} />);
}

export default Component;
