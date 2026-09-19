import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l0vwpeb-g {
  fill: currentColor;
  d: path("M20 19V3H4v16H2v2h20v-2zM11 5h2v14h-2z");
}
</style><path class="l0vwpeb-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-curtains-closed"} {...others} />);
}

export default Component;
