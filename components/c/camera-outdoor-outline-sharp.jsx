import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kw74gru7p {
  fill: currentColor;
  d: path("M11.923 17.616v-5.231h5.23v2.077L19 13.489v3.022l-1.846-.972v2.077zM5 20V9.5l7-5.27l7 5.27V11h-1v-1l-6-4.5L6 10v9h13v1zm7-7.75");
}
</style><path class="kw74gru7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:camera-outdoor-outline-sharp"} {...others} />);
}

export default Component;
