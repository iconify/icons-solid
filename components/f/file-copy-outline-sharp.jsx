import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tx_hffbgl {
  fill: currentColor;
  d: path("M6 19V1h9l6 6v12zm8-11V3H8v14h11V8zM2 23V7h2v14h11v2zM8 3v5zv14z");
}
</style><path class="tx_hffbgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:file-copy-outline-sharp"} {...others} />);
}

export default Component;
