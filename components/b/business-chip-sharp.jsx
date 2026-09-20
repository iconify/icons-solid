import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zo8tfg9af {
  fill: currentColor;
  d: path("M8.116 15.885h7.769v-5.77h-2v-2h-3.77v2h-2zm2.769-5.77v-1.23h2.23v1.23zM8 18q-2.507 0-4.253-1.745Q2 14.509 2 12.004t1.747-4.255T8 6h8q2.507 0 4.254 1.745T22 11.996t-1.747 4.255T16 18z");
}
</style><path class="zo8tfg9af"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:business-chip-sharp"} {...others} />);
}

export default Component;
