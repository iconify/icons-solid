import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rf0ju4blx {
  fill: currentColor;
  d: path("M1 3v18h22V3zm20 16H3V5h18zM9 8h2v8H9zm4 0h2v8h-2z");
}
</style><path class="rf0ju4blx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-pause-presentation"} {...others} />);
}

export default Component;
