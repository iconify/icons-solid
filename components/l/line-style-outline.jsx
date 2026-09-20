import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iduv_-qnu {
  fill: currentColor;
  d: path("M3 20v-2h2v2zm0-4v-2h5v2zm0-4v-2h8v2zm0-4V4h18v4zm4 12v-2h2v2zm2.5-4v-2h5v2zm1.5 4v-2h2v2zm2-8v-2h8v2zm2 8v-2h2v2zm1-4v-2h5v2zm3 4v-2h2v2z");
}
</style><path class="iduv_-qnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:line-style-outline"} {...others} />);
}

export default Component;
