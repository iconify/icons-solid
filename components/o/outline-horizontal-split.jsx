import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xla0yzz0p {
  fill: currentColor;
  d: path("M19 15v2H5v-2zm2-10H3v2h18zm0 4H3v2h18zm0 4H3v6h18z");
}
</style><path class="xla0yzz0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-horizontal-split"} {...others} />);
}

export default Component;
