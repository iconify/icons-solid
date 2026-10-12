import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xiw4hzsdu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 15.45V3.85h4v11.6a3.25 3.25 0 1 1-4 0Zm11.22-8.56l-3.48 6.63a4.25 4.25 0 1 0 7.52 0l-3.48-6.63l-.28-.53z");
}
</style><path class="xiw4hzsdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:dew-point-sharp"} {...others} />);
}

export default Component;
