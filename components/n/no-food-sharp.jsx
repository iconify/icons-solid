import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u8r9b-baj {
  fill: currentColor;
  d: path("m20.475 23.3l-8.3-8.3H1q0-3.025 2.338-4.512T8.5 9q.125 0 .275.013t.275.012v2.825L.675 3.5L2.1 2.075l19.8 19.8zM1 19v-2h15v2zm0 4v-2h15v2zm20.625-4.25L11.45 8.6L11 5h5V1h2v4h5z");
}
</style><path class="u8r9b-baj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:no-food-sharp"} {...others} />);
}

export default Component;
