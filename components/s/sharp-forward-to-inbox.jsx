import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m2_5g7b3c {
  fill: currentColor;
  d: path("M22 4H2v16h11v-2H4V8l8 5l8-5v5h2zm-10 7L4 6h16zm7 4l4 4l-4 4v-3h-4v-2h4z");
}
</style><path class="m2_5g7b3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-forward-to-inbox"} {...others} />);
}

export default Component;
