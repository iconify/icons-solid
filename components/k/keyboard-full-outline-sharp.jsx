import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r4f2ows3v {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-5h16V6H4z");
}
</style><path class="r4f2ows3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:keyboard-full-outline-sharp"} {...others} />);
}

export default Component;
