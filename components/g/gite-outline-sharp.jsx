import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x14j4oble {
  fill: currentColor;
  d: path("M3 18v-7.558l3.692-3.846H8V5h1v1.596h8.308L21 10.442V18zm12-1h5v-6.136l-2.48-2.616L15 10.902zM4 17h10v-5.211H4z");
}
</style><path class="x14j4oble"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:gite-outline-sharp"} {...others} />);
}

export default Component;
