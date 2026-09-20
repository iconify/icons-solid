import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ixncu1bfg {
  fill: currentColor;
  d: path("m12 15.596l3.173-3.192H8.827zM5 19h14V9H5zm-1 1V4h16v16z");
}
</style><path class="ixncu1bfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:top-panel-open-sharp"} {...others} />);
}

export default Component;
