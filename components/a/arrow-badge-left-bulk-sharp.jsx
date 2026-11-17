import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hgde5qbun {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M11 20a1 1 0 0 1-.707-.293l-7-7a1 1 0 0 1 0-1.414l7-7A1 1 0 0 1 11 4h9a1.002 1.002 0 0 1 .707 1.707L14.414 12l6.293 6.293A1 1 0 0 1 20 20Z");
}
</style><path class="hgde5qbun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-badge-left-bulk-sharp"} {...others} />);
}

export default Component;
