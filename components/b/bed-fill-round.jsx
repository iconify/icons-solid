import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z0sghcbxe {
  fill: currentColor;
  d: path("M4 8h2v9H4v2a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0Zm4 9V8h9a5 5 0 0 1 5 5v6a1 1 0 0 1-2 0v-2Z");
}
</style><path class="z0sghcbxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bed-fill-round"} {...others} />);
}

export default Component;
