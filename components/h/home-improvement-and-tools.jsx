import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jn-26sb5l {
  fill: currentColor;
  d: path("M6 2h12l-3 4.2V10H9V6.2zm3 10h6v2H9zm0 4h6v3l-3 3l-3-3z");
}
</style><path class="jn-26sb5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:home-improvement-and-tools"} {...others} />);
}

export default Component;
