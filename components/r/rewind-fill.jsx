import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.dnmlfgb5a {
  fill: currentColor;
  d: path("M232 71.84v112.32a15.92 15.92 0 0 1-24.48 13.34L128 146.86v37.3a15.92 15.92 0 0 1-24.48 13.34l-88.19-56.16a15.8 15.8 0 0 1 0-26.68l88.19-56.16A15.91 15.91 0 0 1 128 71.84v37.3l79.52-50.64A15.91 15.91 0 0 1 232 71.84");
}
</style><path class="dnmlfgb5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:rewind-fill"} {...others} />);
}

export default Component;
