import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wtw2t2byk {
  fill: currentColor;
  d: path("M10 22v-8H7V2h10l-2 7h4z");
}
</style><path class="wtw2t2byk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:flash-on"} {...others} />);
}

export default Component;
