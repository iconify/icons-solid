import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q-7f4ibhr {
  fill: currentColor;
  d: path("M22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4zm-2 13.17L18.83 16H4V4h16zM13 5h-2v4H7v2h4v4h2v-4h4V9h-4z");
}
</style><path class="q-7f4ibhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-add-comment"} {...others} />);
}

export default Component;
