import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zjofkbbuj {
  fill: currentColor;
  d: path("m7.414 18l-3.707 3.707A1 1 0 0 1 2 21V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1ZM13 10V7a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0m-.99 2H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="zjofkbbuj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chat-warning-fill-sharp"} {...others} />);
}

export default Component;
