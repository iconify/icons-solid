import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ijdxe0fug {
  fill: currentColor;
  d: path("M2 15.5v2h20v-2zm0-5v2h20v-2zm0-5v2h20v-2z");
}
</style><path class="ijdxe0fug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-dehaze"} {...others} />);
}

export default Component;
