import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iiq-d_b4e {
  fill: currentColor;
  d: path("M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2L7.5 3.5L6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2zM15 20H6c-.55 0-1-.45-1-1v-1h10zm4-1c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11z");
}

.pbc4_dbkt {
  fill: currentColor;
  d: path("M9 7h6v2H9zm0 3h6v2H9zm7-3h2v2h-2zm0 3h2v2h-2z");
}
</style><path class="iiq-d_b4e"/><path class="pbc4_dbkt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-receipt-long"} {...others} />);
}

export default Component;
