import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":416};
const content = `<style>.e0l8_jbqo {
  d: path("M170.667 0H256v415.289h-85.333zM0 0h85.333v415.289H0z");
}
</style><path class="e0l8_jbqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:elevenlabs-icon"} {...others} />);
}

export default Component;
