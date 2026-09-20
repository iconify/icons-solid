import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lbtakkbof {
  fill: currentColor;
  d: path("M3 4V3h18v1zm4.5 5.5v-2h9v2zm0 6v-2h9v2z");
}
</style><path class="lbtakkbof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:align-start"} {...others} />);
}

export default Component;
