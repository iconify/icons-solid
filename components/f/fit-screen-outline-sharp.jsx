import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lx1qacbxp {
  fill: currentColor;
  d: path("M20 9V6h-3V4h5v5zM2 9V4h5v2H4v3zm15 11v-2h3v-3h2v5zM2 20v-5h2v3h3v2zm4-4V8h12v8zm2-2h8v-4H8zm0 0v-4z");
}
</style><path class="lx1qacbxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:fit-screen-outline-sharp"} {...others} />);
}

export default Component;
