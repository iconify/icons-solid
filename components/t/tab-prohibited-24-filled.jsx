import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hhrafrbfh {
  fill: currentColor;
  d: path("M5.857 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h6.165a6.5 6.5 0 0 1-.848-2H5.857a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5.142a6.5 6.5 0 0 1 2 .791V6a3 3 0 0 0-3-3zM17.5 23a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m-3.309-3.252a4 4 0 0 1 5.557-5.557zm1.06 1.06l5.558-5.556a4 4 0 0 1-5.557 5.557");
}
</style><path class="hhrafrbfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:tab-prohibited-24-filled"} {...others} />);
}

export default Component;
