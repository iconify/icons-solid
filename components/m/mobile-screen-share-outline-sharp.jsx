import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wwu-3bc2t {
  fill: currentColor;
  d: path("M9 15v-4.5h4v-2l3 3l-3 3v-2h-2V15zm-4 8V1h14v22zm2-3v1h10v-1zm0-2h10V6H7zM7 4h10V3H7zm0 0V3zm0 16v1z");
}
</style><path class="wwu-3bc2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mobile-screen-share-outline-sharp"} {...others} />);
}

export default Component;
