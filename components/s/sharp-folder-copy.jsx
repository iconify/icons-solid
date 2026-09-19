import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h1vmt1quk {
  fill: currentColor;
  d: path("M23 4h-9l-2-2H5.01L5 17h18z");
}

.mu6d72pit {
  fill: currentColor;
  d: path("M3 6H1v15h19v-2H3z");
}
</style><path class="mu6d72pit"/><path class="h1vmt1quk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-folder-copy"} {...others} />);
}

export default Component;
