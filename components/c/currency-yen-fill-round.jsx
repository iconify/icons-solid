import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sc_mnpbrr {
  fill: currentColor;
  d: path("M6.707 4.293L12 9.586l5.293-5.293a.999.999 0 1 1 1.414 1.414L13 11.414V12h3a1 1 0 0 1 0 2h-3v2h3a1 1 0 0 1 0 2h-3v1a1 1 0 0 1-2 0v-1H8a1 1 0 0 1 0-2h3v-2H8a1 1 0 0 1 0-2h3v-.586L5.293 5.707a.999.999 0 1 1 1.414-1.414");
}
</style><path class="sc_mnpbrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:currency-yen-fill-round"} {...others} />);
}

export default Component;
