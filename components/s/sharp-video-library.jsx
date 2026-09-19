import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iaktu0poq {
  fill: currentColor;
  d: path("M4 6H2v16h16v-2H4zm18-4H6v16h16zM12 14.5v-9l6 4.5z");
}
</style><path class="iaktu0poq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-video-library"} {...others} />);
}

export default Component;
