import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iacizf6un {
  fill: currentColor;
  d: path("M21 3H3v18h18zm-6 6h-4v2h4v6H9v-2h4v-2H9V7h6z");
}
</style><path class="iacizf6un"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-looks-5"} {...others} />);
}

export default Component;
