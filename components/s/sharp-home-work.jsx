import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t4vrjsbgu {
  fill: currentColor;
  d: path("M10 3v1.97l7 5V11h2v2h-2v2h2v2h-2v4h6V3zm9 6h-2V7h2z");
}

.tnhu26bxu {
  fill: currentColor;
  d: path("M1 11v10h5v-6h4v6h5V11L8 6z");
}
</style><path class="tnhu26bxu"/><path class="t4vrjsbgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-home-work"} {...others} />);
}

export default Component;
