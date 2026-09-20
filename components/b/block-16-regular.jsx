import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.so_khjbtd {
  d: path("M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2zm0 1a5 5 0 1 0 0 10A5 5 0 0 0 8 3zM5.5 7.5h5.002a.5.5 0 0 1 .09.992l-.09.008H5.5a.5.5 0 0 1-.09-.992L5.5 7.5h5.002H5.5z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="so_khjbtd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:block-16-regular"} {...others} />);
}

export default Component;
