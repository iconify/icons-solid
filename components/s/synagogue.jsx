import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c7f_ugplh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 21H6a2 2 0 0 1-2-2V9c0-.613.774-1.387 2-2l6-3l6 3c1.226.613 2 1.387 2 2v10a2 2 0 0 1-2 2zm0-12l3.464 6H8.536Zm0 8l3.464-6H8.536Z");
}
</style><path class="c7f_ugplh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:synagogue"} {...others} />);
}

export default Component;
