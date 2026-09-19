import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pumg_ybch {
  fill: currentColor;
  d: path("M2 4v16h20V4zm10 6H8v1h4v5h-2v1H8v-1H6v-2h4v-1H6V8h2V7h2v1h2zm4 6.25l-2-2h4zM14 10l2-2l2 2z");
}
</style><path class="pumg_ybch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-price-change"} {...others} />);
}

export default Component;
