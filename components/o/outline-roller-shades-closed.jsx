import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.svrzk5j8c {
  fill: currentColor;
  d: path("M20 19V3H4v16H2v2h8.25c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75H22v-2zM18 5v10H6V5zM6 19v-2h5v2zm7 0v-2h5v2z");
}
</style><path class="svrzk5j8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-roller-shades-closed"} {...others} />);
}

export default Component;
