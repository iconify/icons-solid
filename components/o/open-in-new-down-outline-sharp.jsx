import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ty-lzqbvr {
  fill: currentColor;
  d: path("M4 20V4h16v7.616h-1V5H5v14h6.616v1zm10 0v-1h4.312L9.089 9.777l.688-.688L19 18.287V14h1v6z");
}
</style><path class="ty-lzqbvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:open-in-new-down-outline-sharp"} {...others} />);
}

export default Component;
