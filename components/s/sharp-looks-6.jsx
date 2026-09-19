import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fwdt0v2ci {
  fill: currentColor;
  d: path("M11 15h2v-2h-2zM21 3H3v18h18zm-6 6h-4v2h4v6H9V7h6z");
}
</style><path class="fwdt0v2ci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-looks-6"} {...others} />);
}

export default Component;
