import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bghwpye8d {
  fill: currentColor;
  d: path("M18.923 20.77V17h-1.23v-4.615h2.788l-1.123 3.23h1.757zM3 20.076V4.616q0-.691.463-1.153T4.615 3h14.77q.69 0 1.152.463T21 4.616v5h-6.077V17H6.077z");
}
</style><path class="bghwpye8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:quickreply"} {...others} />);
}

export default Component;
