import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b5pbzgpay {
  fill: currentColor;
  d: path("M13 20v-6h4.5v6zm1.5-1.5H16v-3h-1.5zm4 3.5v-3.75h3v-.75h-3V16H23v3.75h-3v.75h3V22zM1 20V9.525L8 4V1h2v3l7 5.5V13h-5v7h-2V6.55l-1-.8l-1 .8L8.05 20z");
}
</style><path class="b5pbzgpay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:vo2-max-sharp"} {...others} />);
}

export default Component;
