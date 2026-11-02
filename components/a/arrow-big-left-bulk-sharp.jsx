import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i_p0q-y_v {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21 9v6a1 1 0 0 1-1 1h-7v4a1.002 1.002 0 0 1-1.707.707l-8-8a1 1 0 0 1 0-1.414l8-8A1 1 0 0 1 13 4v4h7a1 1 0 0 1 1 1");
}
</style><path class="i_p0q-y_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-big-left-bulk-sharp"} {...others} />);
}

export default Component;
