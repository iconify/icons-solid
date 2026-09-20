import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gcor9u8nx {
  fill: currentColor;
  d: path("M10 21v-7H3v-1h7v-2H3v-1h7V3h1v7h2V3h1v7h7v1h-7v2h7v1h-7v7h-1v-7h-2v7zm1-8h2v-2h-2z");
}
</style><path class="gcor9u8nx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:grid-goldenratio"} {...others} />);
}

export default Component;
