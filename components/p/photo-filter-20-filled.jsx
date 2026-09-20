import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.zmwrk2blg {
  fill: currentColor;
  d: path("M6.257 13.743a6 6 0 1 1 7.486-7.486a6 6 0 1 1-7.486 7.486M3.5 8A4.5 4.5 0 0 0 6 12.032V12a6 6 0 0 1 6.032-6A4.5 4.5 0 0 0 3.5 8m4.468 6A4.5 4.5 0 1 0 14 7.968V8a6 6 0 0 1-6 6z");
}
</style><path class="zmwrk2blg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:photo-filter-20-filled"} {...others} />);
}

export default Component;
