import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.wo86m6jfi {
  fill: currentColor;
  d: path("M2.5 13a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm0-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zM2 9.5A1.5 1.5 0 0 0 3.5 11H5V5H3.5A1.5 1.5 0 0 0 2 6.5zm8 1.5H6V5h4zm1 0V5h1.5A1.5 1.5 0 0 1 14 6.5v3a1.5 1.5 0 0 1-1.5 1.5z");
}
</style><path class="wo86m6jfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:table-insert-row-16-filled"} {...others} />);
}

export default Component;
