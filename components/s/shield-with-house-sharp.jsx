import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s9l4u9maa {
  fill: currentColor;
  d: path("m12 9.55l7.25 5.625q-.725 1.975-2.087 3.563T14 21.25v-6.225h-4v6.225q-1.8-.925-3.162-2.512T4.75 15.175zm0-7.525l8 3V11.1q0 .5-.05.988t-.125.987L12 7.025l-7.825 6.05q-.1-.5-.137-.987T4 11.1V5.025z");
}
</style><path class="s9l4u9maa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:shield-with-house-sharp"} {...others} />);
}

export default Component;
