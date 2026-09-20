import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w16cinbyf {
  fill: currentColor;
  d: path("m13 21l1-7H7.975L16 3h1l-1 7h6.025L14 21zM3 18v-2h8.7l-.3 2zm-1-5v-2h5.7l-1.45 2zm2-5V6h7.35L9.9 8z");
}
</style><path class="w16cinbyf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bolt-boost"} {...others} />);
}

export default Component;
