import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l832-6puf {
  fill: currentColor;
  d: path("M21 3H3v18h18zM9.5 15H7.75l1.38-4.5H6.5V9h4.86zm8.5 0h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3z");
}
</style><path class="l832-6puf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-7k"} {...others} />);
}

export default Component;
