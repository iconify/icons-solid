import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zwabcdchs {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-2h16V6H4zm1-1h10L10 7H5zm8-8h6V7h-6zm-9 9V6z");
}
</style><path class="zwabcdchs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:payment-card-outline-sharp"} {...others} />);
}

export default Component;
