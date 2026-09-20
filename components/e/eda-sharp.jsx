import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wr7rs06ls {
  fill: currentColor;
  d: path("M3 23v-7h5.45l3.4 4.525l6.175-6.175l2.35-1.425l2.65 1.975l-8.1 8.1zm4-11V2h2v10h2V1h2v11h2V3h2v9.575l-4.95 4.9L9.45 14H3V4h2v8z");
}
</style><path class="wr7rs06ls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:eda-sharp"} {...others} />);
}

export default Component;
