import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ymmezihid {
  fill: currentColor;
  d: path("M3 19V8.712h2.827V5h4.789v3.712h2.769V5h4.788v3.712H21V19z");
}
</style><path class="ymmezihid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:brick-sharp"} {...others} />);
}

export default Component;
