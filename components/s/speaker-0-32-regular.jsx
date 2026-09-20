import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.buwfomhhp {
  fill: currentColor;
  d: path("M15.866 4.72c.788-.788 2.134-.23 2.134.883v20.793c0 1.114-1.346 1.671-2.134.884l-4.694-4.695A2 2 0 0 0 9.757 22H6a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4h3.757a2 2 0 0 0 1.415-.586zM16 7.413l-3.414 3.414A4 4 0 0 1 9.757 12H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3.757a4 4 0 0 1 2.829 1.171L16 24.585z");
}
</style><path class="buwfomhhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:speaker-0-32-regular"} {...others} />);
}

export default Component;
