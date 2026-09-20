import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rlsmbdbms {
  fill: currentColor;
  d: path("M2 22V2h20v8h-2V4H4v13.125L5.15 16H15v2H6zm2-6V4zm15 7v-5h-2v-6h5l-1.7 4h2.2z");
}
</style><path class="rlsmbdbms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:quickreply-outline-sharp"} {...others} />);
}

export default Component;
