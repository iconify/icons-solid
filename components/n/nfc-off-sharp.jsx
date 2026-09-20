import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lbq-w3oya {
  fill: currentColor;
  d: path("M3 21V5.825L.675 3.5L2.1 2.075l19.8 19.8l-1.425 1.425l-2.3-2.3zm4-4h7.175l-2-2H9v-3.175l-2-2zm14 1.15l-4-4V7h-5.875v1.275L5.85 3H21zm-6-6l-2-2V9h2z");
}
</style><path class="lbq-w3oya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:nfc-off-sharp"} {...others} />);
}

export default Component;
