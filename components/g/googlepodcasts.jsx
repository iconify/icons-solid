import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lu7-n9u6e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.6 21.13v5.77M6.4 21.13v5.77M24 3.5v5.25m0 30.5v5.25m0-30.02v19.04m8.8-22.26v5.77m0 5.73v13.98m-17.6 0v-5.77m0-5.73V11.26");
}
</style><path class="lu7-n9u6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:googlepodcasts"} {...others} />);
}

export default Component;
