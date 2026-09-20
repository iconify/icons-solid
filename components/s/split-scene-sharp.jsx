import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ydc3gto7h {
  fill: currentColor;
  d: path("M3 20V4h6v16zm8 2V2h2v2h8v16h-8v2z");
}
</style><path class="ydc3gto7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:split-scene-sharp"} {...others} />);
}

export default Component;
