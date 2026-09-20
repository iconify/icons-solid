import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.rttthgbmd {
  fill: currentColor;
  d: path("M156 128a28 28 0 1 1-28-28a28 28 0 0 1 28 28");
}
</style><path class="rttthgbmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:dot-outline-fill"} {...others} />);
}

export default Component;
