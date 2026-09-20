import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ve2q_bbad {
  fill: currentColor;
  d: path("M3 21V7h2v12h12v2zm4-4v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2zm0-4V3h2v2zm4 12v-2h2v2zm0-12V3h2v2zm4 0V3h2v2zm0 12v-2h2v2zm4-12V3h2v2zm0 12v-2h2v2zm0-4v-2h2v2zm0-4V7h2v2z");
}
</style><path class="ve2q_bbad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:flip-to-back-sharp"} {...others} />);
}

export default Component;
