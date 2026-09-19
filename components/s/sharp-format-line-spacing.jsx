import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.siskydbba {
  fill: currentColor;
  d: path("M6 7h2.5L5 3.5L1.5 7H4v10H1.5L5 20.5L8.5 17H6zm4-2v2h12V5zm0 14h12v-2H10zm0-6h12v-2H10z");
}
</style><path class="siskydbba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-format-line-spacing"} {...others} />);
}

export default Component;
