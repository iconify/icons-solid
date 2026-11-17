import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sekwasb5k {
  fill: currentColor;
  d: path("M15 4a1 1 0 0 1 0 2h-2v2h1a3 3 0 0 1 3 3h3v-1a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0v-1h-3a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3H4v1a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0v1h3a3 3 0 0 1 3-3h1V6H9a1 1 0 0 1 0-2Z");
}
</style><path class="sekwasb5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:valve-fill"} {...others} />);
}

export default Component;
