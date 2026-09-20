import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g1rht5byg {
  fill: currentColor;
  d: path("M4 20V4h16v16zm8.991-5.009q.393-.393.393-.991t-.393-.991t-.991-.393t-.991.393t-.393.991t.393.991t.991.394t.991-.394M5 14.5h4.692q-.269-1.096.443-1.99q.711-.895 1.865-.895t1.866.894t.442 1.991H19V5H5z");
}
</style><path class="g1rht5byg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:bottom-app-bar-sharp"} {...others} />);
}

export default Component;
