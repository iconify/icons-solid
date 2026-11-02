import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tuoq_xbai {
  fill: currentColor;
  d: path("M9 16.586L20.293 5.293a.999.999 0 1 1 1.414 1.414l-12 12a1 1 0 0 1-1.414 0l-6-6a.999.999 0 1 1 1.414-1.414Z");
}
</style><path class="tuoq_xbai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:check-large-fill-round"} {...others} />);
}

export default Component;
