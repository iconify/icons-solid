import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hv2jhxkpp {
  fill: currentColor;
  d: path("M14 6v15H3v-2h2V3h9v1h5v15h2v2h-4V6zm-4 5v2h2v-2z");
}
</style><path class="hv2jhxkpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-meeting-room"} {...others} />);
}

export default Component;
