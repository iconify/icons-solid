import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m_pxpplcy {
  fill: currentColor;
  d: path("M2 13V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8Zm0 2h9v5H3a1 1 0 0 1-1-1Zm20 0v4a1 1 0 0 1-1 1h-8v-5Z");
}
</style><path class="m_pxpplcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:touchpad-fill-sharp"} {...others} />);
}

export default Component;
