import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d1jm2ob_d {
  fill: currentColor;
  d: path("M3 21V3h18v18zm8-4h2l2-7.975V7H9v2h4z");
}
</style><path class="d1jm2ob_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:looks-7-sharp"} {...others} />);
}

export default Component;
