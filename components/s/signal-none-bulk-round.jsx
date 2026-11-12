import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e0w3qebum {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6.01 19a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Zm4 0a1 1 0 0 1 0 2H10a1 1 0 0 1 0-2Zm4 0a1 1 0 0 1 0 2H14a1 1 0 0 1 0-2Zm4 0a1 1 0 0 1 0 2H18a1 1 0 0 1 0-2Z");
}
</style><path class="e0w3qebum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:signal-none-bulk-round"} {...others} />);
}

export default Component;
