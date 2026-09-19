import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f15mgiznz {
  fill: currentColor;
  d: path("M21 3H3v18h18zm-2.5 6h-3.2l-5 9H5.5v-3h3.2l5-9h4.8z");
}
</style><path class="f15mgiznz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-escalator"} {...others} />);
}

export default Component;
