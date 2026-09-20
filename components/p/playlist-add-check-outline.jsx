import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t1pk5zb5q {
  fill: currentColor;
  d: path("M3.5 15.5v-1h7v1zm0-4v-1h11v1zm0-4v-1h11v1zm12.85 10.808l-2.858-2.858l.708-.708l2.15 2.139l4.25-4.25l.708.719z");
}
</style><path class="t1pk5zb5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:playlist-add-check-outline"} {...others} />);
}

export default Component;
