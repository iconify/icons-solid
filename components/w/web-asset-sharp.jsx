import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oc2312bsd {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h16V8H4z");
}
</style><path class="oc2312bsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:web-asset-sharp"} {...others} />);
}

export default Component;
