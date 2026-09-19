import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jmf0-0hbz {
  fill: currentColor;
  d: path("M3 3v18h18V3zm6 6H7V7h2zm4 0h-2V7h2zm4 0h-2V7h2z");
}
</style><path class="jmf0-0hbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-padding"} {...others} />);
}

export default Component;
