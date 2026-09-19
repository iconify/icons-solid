import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zamwb1b7d {
  fill: currentColor;
  d: path("M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z");
}
</style><path class="zamwb1b7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:warning"} {...others} />);
}

export default Component;
