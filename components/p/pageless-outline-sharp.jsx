import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xis5lhb-g {
  fill: currentColor;
  d: path("M2 21v-6.654h1V20h6.654v1zm12.346 0v-1H21v-5.654h1V21zM2 9.673V3h7.654v1H3v5.673zm19 0V4h-6.654V3H22v6.673z");
}
</style><path class="xis5lhb-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:pageless-outline-sharp"} {...others} />);
}

export default Component;
