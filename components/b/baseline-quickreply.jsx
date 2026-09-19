import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.im-o75nsy {
  fill: currentColor;
  d: path("M22.5 16h-2.2l1.7-4h-5v6h2v5z");
}

.qhuchrbkn {
  fill: currentColor;
  d: path("M22 4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h9v-8h7z");
}
</style><path class="qhuchrbkn"/><path class="im-o75nsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-quickreply"} {...others} />);
}

export default Component;
