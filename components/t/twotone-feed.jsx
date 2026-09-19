import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bsb696bit {
  fill: currentColor;
  d: path("M15 5H5v14h14V9h-4zM7 7h5v2H7zm10 10H7v-2h10zm0-6v2H7v-2z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.oc--z5bfw {
  fill: currentColor;
  d: path("M7 13h10v-2H7zm0 4h10v-2H7zm9-14H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8zm3 16H5V5h10v4h4zM12 7H7v2h5z");
}
</style><path class="bsb696bit"/><path class="oc--z5bfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-feed"} {...others} />);
}

export default Component;
