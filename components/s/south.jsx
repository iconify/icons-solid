import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hc91lmb8b {
  fill: currentColor;
  d: path("m12 21l-6.346-6.346l.688-.688l5.158 5.151V2.981h1v16.117l5.158-5.157l.688.713z");
}
</style><path class="hc91lmb8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:south"} {...others} />);
}

export default Component;
