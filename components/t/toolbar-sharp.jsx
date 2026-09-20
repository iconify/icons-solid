import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vh5k6c_dg {
  fill: currentColor;
  d: path("M3 8V3h18v5zm0 13V10h18v11z");
}
</style><path class="vh5k6c_dg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:toolbar-sharp"} {...others} />);
}

export default Component;
