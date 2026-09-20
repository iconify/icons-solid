import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dxqhbubvv {
  fill: currentColor;
  d: path("M11 22v-4H6l-3-3l3-3h5v-2H4V4h7V2h2v2h5l3 3l-3 3h-5v2h7v6h-7v4z");
}
</style><path class="dxqhbubvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:signpost-sharp"} {...others} />);
}

export default Component;
