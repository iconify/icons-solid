import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ajtq-ubkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.988 43.958c11.021-4.412 16.379-16.923 11.967-27.944C39.543 4.994 27.032-.364 16.012 4.048S-.367 20.971 4.045 31.991a21.49 21.49 0 0 0 19.946 13.506V16.005l-5 2.5");
}
</style><path class="ajtq-ubkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:chennai-one"} {...others} />);
}

export default Component;
