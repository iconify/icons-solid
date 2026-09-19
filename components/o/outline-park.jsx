import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f-1v_4bkn {
  fill: currentColor;
  d: path("M17 12h2L12 2L5.05 12H7l-3.9 6h6.92v4h3.95v-4H21zM6.79 16l3.9-6H8.88l3.13-4.5l3.15 4.5h-1.9l4 6z");
}
</style><path class="f-1v_4bkn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-park"} {...others} />);
}

export default Component;
