import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hb1_szbpz {
  fill: currentColor;
  d: path("M2 2h12v2H4v10H2z");
}

.qpe_27g9q {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6 6h11l4 4v11H6zm2 2h7v3H8zm5.5 11a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5");
}
</style><path clip-rule="evenodd" class="qpe_27g9q"/><path class="hb1_szbpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-save-all"} {...others} />);
}

export default Component;
