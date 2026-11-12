import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f1_lxr03g {
  fill: currentColor;
  d: path("M10 5a3 3 0 1 1 6 0v2a3 3 0 1 1-6 0Zm2 0v2a1 1 0 0 0 2 0V5a1 1 0 0 0-2 0M7 8h.01a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2m14 9a1 1 0 0 1 0 2H5.414l1.293 1.293a.999.999 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a.999.999 0 1 1 1.414 1.414L5.414 17Z");
}
</style><path class="f1_lxr03g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:decimal-decrease-fill"} {...others} />);
}

export default Component;
