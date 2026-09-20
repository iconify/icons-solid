import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jbjay1mqt {
  fill: currentColor;
  d: path("M3.73 20v-5h1v5zm2.77-2v-1h6v-4H6.996L9.4 5h7.2l2.404 8H13.5v5z");
}
</style><path class="jbjay1mqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:wall-lamp-sharp"} {...others} />);
}

export default Component;
