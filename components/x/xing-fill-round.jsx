import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f69gr9b9v {
  fill: currentColor;
  d: path("m18.878 3.479l-5.733 10.51l3.723 6.515a1 1 0 1 1-1.736.992l-4-7a1 1 0 0 1-.01-.975l6-11a1 1 0 0 1 1.756.958M7.894 5.553l2 4a1 1 0 0 1 0 .894l-3 6a1 1 0 1 1-1.788-.894L7.882 10L6.106 6.447a1 1 0 1 1 1.788-.894");
}
</style><path class="f69gr9b9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:xing-fill-round"} {...others} />);
}

export default Component;
