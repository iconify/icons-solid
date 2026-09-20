import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rtgfgcttc {
  fill: currentColor;
  d: path("M15 20H4q-.625 0-.9-.55t.1-1.05L8 12L3.2 5.6q-.375-.5-.1-1.05T4 4h11q.475 0 .9.212t.7.588l4.5 6q.4.525.4 1.2t-.4 1.2l-4.5 6q-.275.375-.7.588T15 20");
}
</style><path class="rtgfgcttc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:label-important-rounded"} {...others} />);
}

export default Component;
