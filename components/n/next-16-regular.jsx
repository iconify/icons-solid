import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.k_00_lvkp {
  fill: currentColor;
  d: path("M14 2.5a.5.5 0 1 0-1 0v11a.5.5 0 0 0 1 0zM2 3.002a1 1 0 0 1 1.579-.816l7 4.963a1 1 0 0 1 .006 1.628l-7 5.037A1 1 0 0 1 2 13.003zm8 4.963L3 3.002v10z");
}
</style><path class="k_00_lvkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:next-16-regular"} {...others} />);
}

export default Component;
