import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kmdd1xg6b {
  fill: currentColor;
  d: path("M21 3H3v18h18zm-4 10h-4v4h-2v-4H7v-2h4V7h2v4h4z");
}
</style><path class="kmdd1xg6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-add-box"} {...others} />);
}

export default Component;
