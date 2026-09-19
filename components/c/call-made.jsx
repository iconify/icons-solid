import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fbhd2_bau {
  fill: currentColor;
  d: path("M9 5v2h6.59L4 18.59L5.41 20L17 8.41V15h2V5z");
}
</style><path class="fbhd2_bau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:call-made"} {...others} />);
}

export default Component;
