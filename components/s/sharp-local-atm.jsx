import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.scvxqdbhp {
  fill: currentColor;
  d: path("M11 17h2v-1h2v-5h-4v-1h4V8h-2V7h-2v1H9v5h4v1H9v2h2zM22 4H2.01L2 20h20zm-2 14H4V6h16z");
}
</style><path class="scvxqdbhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-local-atm"} {...others} />);
}

export default Component;
