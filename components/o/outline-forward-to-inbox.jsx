import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xhf6nqb8b {
  fill: currentColor;
  d: path("M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9v-2H4V8l8 5l8-5v5h2V6c0-1.1-.9-2-2-2m-8 7L4 6h16zm7 4l4 4l-4 4v-3h-4v-2h4z");
}
</style><path class="xhf6nqb8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-forward-to-inbox"} {...others} />);
}

export default Component;
