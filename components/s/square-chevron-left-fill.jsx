import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ss-f7gbeu {
  fill: currentColor;
  d: path("M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm9.414 7l2.293-2.293a.999.999 0 1 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a.999.999 0 1 0 1.414-1.414Z");
}
</style><path class="ss-f7gbeu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-chevron-left-fill"} {...others} />);
}

export default Component;
