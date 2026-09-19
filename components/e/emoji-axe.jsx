import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.n8nu22f5e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.468 8.364v5.012c-6.468 0-10.78.717-12.936 2.865V5.5C19.688 7.648 24 8.364 30.468 8.364");
}

.nownb-bgw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m25.772 13.528l-.021 15.125l.864 2.594l-.018 11.246l-.869.001l-2.604.005l-.868.001l.018-11.246l.872-2.597l.021-14.78zm-2.626-5.636l.021-2.236l2.604-.004l-.02 2.235z");
}
</style><path class="n8nu22f5e"/><path class="nownb-bgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:emoji-axe"} {...others} />);
}

export default Component;
