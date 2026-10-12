import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vtmcnszaf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75v2m-2.25 0h4.5v6.5h-4.5zm-2.25 9v-2.5h9v3.25h-2V18h-5v-3.5h-2zM12 18v1.5m-2.5 1.75h5v-1");
}
</style><path class="vtmcnszaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:spark-plug-sharp"} {...others} />);
}

export default Component;
