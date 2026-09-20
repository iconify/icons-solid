import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.avv_6oe-z {
  fill: currentColor;
  d: path("M8.999 4.5V1h-2.5a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5H12.5a1.5 1.5 0 0 0 1.5-1.5V6h-3.501a1.5 1.5 0 0 1-1.5-1.5m1 0V1.25L13.749 5h-3.25a.5.5 0 0 1-.5-.5M3 4a1 1 0 0 1 1-1v8.5A2.5 2.5 0 0 0 6.5 14H12a1 1 0 0 1-1 1H6.556A3.556 3.556 0 0 1 3 11.444z");
}
</style><path class="avv_6oe-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:document-copy-16-filled"} {...others} />);
}

export default Component;
