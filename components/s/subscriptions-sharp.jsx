import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mkpdywbcb {
  fill: currentColor;
  d: path("M2 22V8h20v14zm8-3l6-4l-6-4zM4 7V5h16v2zm3-3V2h10v2z");
}
</style><path class="mkpdywbcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:subscriptions-sharp"} {...others} />);
}

export default Component;
