import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ph_7qmb-f {
  fill: currentColor;
  d: path("M1 20V9.525L8 4V1h2v3l7 5.5V13h-2v-2.475l-3-2.4V20h-2V6.55l-1-.8l-1 .8L8.05 20zm2-2h3.05L6 8.125l-3 2.4zm10 2v-6h4.5v6zm1.5-1.5H16v-3h-1.5zm4 3.5v-3.75h3v-.75h-3V16H23v3.75h-3v.75h3V22zm-5-8.95");
}
</style><path class="ph_7qmb-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:vo2-max-outline-sharp"} {...others} />);
}

export default Component;
