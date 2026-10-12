import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jma15ofrs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 10.25v-5h4.75V7m-13.5 3.25h17.5v3.5a7.5 7.5 0 0 1-7.5 7.5h-2.5a7.5 7.5 0 0 1-7.5-7.5Zm0 3h17.5");
}
</style><path class="jma15ofrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:salad-spinner-sharp"} {...others} />);
}

export default Component;
