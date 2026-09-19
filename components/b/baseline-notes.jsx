import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tk72fs1pt {
  fill: currentColor;
  d: path("M3 18h12v-2H3zM3 6v2h18V6zm0 7h18v-2H3z");
}
</style><path class="tk72fs1pt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-notes"} {...others} />);
}

export default Component;
