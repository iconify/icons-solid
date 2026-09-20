import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q1bstcd_o {
  fill: currentColor;
  d: path("m10.95 16.55l5.65-5.65l-1.45-1.45l-4.2 4.2l-2.1-2.1L7.4 13zM4 8h16V6H4zM2 20V4h20v16z");
}
</style><path class="q1bstcd_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:domain-verification-sharp"} {...others} />);
}

export default Component;
