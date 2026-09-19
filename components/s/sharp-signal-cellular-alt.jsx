import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p1fnx2bzc {
  fill: currentColor;
  d: path("M17 4h3v16h-3zM5 14h3v6H5zm6-5h3v11h-3z");
}
</style><path class="p1fnx2bzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-signal-cellular-alt"} {...others} />);
}

export default Component;
