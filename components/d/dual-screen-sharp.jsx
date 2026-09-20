import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qw3mmsbzw {
  fill: currentColor;
  d: path("M4 18.95V2l10 4.025V22.95zM16 19V4.65L9.45 2H20v17z");
}
</style><path class="qw3mmsbzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:dual-screen-sharp"} {...others} />);
}

export default Component;
