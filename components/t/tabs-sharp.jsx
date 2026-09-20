import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dpw0pqbzm {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h14v-7H5zm7-11h6V6h-6z");
}
</style><path class="dpw0pqbzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tabs-sharp"} {...others} />);
}

export default Component;
