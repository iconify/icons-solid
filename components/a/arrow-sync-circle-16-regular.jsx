import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.nlhkzlh5y {
  fill: currentColor;
  d: path("M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2M7 8a.5.5 0 0 1 0 1h-.73a1.998 1.998 0 0 0 3.33.2a.5.5 0 1 1 .8.6a2.996 2.996 0 0 1-4.9-.146v.846a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 5 8zm4-3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H9a.5.5 0 0 1 0-1h.731A2 2 0 0 0 6.4 6.8a.5.5 0 0 1-.8-.6a2.997 2.997 0 0 1 4.901.146V5.5A.5.5 0 0 1 11 5");
}
</style><path class="nlhkzlh5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-sync-circle-16-regular"} {...others} />);
}

export default Component;
