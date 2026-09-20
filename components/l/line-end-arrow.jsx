import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t7sn1cb0u {
  fill: currentColor;
  d: path("M11 19v-6H2v-2h9V5l11 7z");
}
</style><path class="t7sn1cb0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:line-end-arrow"} {...others} />);
}

export default Component;
