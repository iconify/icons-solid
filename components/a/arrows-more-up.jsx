import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft_m69bqd {
  fill: currentColor;
  d: path("M12 19v-9H3V8h11v11zm5-5V5H8V3h11v11z");
}
</style><path class="ft_m69bqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:arrows-more-up"} {...others} />);
}

export default Component;
