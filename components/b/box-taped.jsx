import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x04mzm79z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 12v4.934a1 1 0 0 1-.557.897l-8 3.95a1 1 0 0 1-.886 0l-8-3.95A1 1 0 0 1 3 16.934V7.066a1 1 0 0 1 .557-.897l8-3.95a1 1 0 0 1 .886 0l8 3.95a1 1 0 0 1 .557.897zM3.16 6.523L12 10.89l8.84-4.366M12 10.89v10.996M7.5 4.222l9 4.445");
}
</style><path class="x04mzm79z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:box-taped"} {...others} />);
}

export default Component;
