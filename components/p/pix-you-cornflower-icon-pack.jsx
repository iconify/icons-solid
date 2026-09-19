import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ab9g42bke {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m35.397 38.558l7.103 2.621L30.167 6.821L24 24");
}

.oj464bbcb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.064 38.558l7.103 2.621L17.833 6.821L5.5 41.179l7.103-2.621");
}
</style><path class="oj464bbcb"/><path class="ab9g42bke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pix-you-cornflower-icon-pack"} {...others} />);
}

export default Component;
