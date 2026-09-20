import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.epygqxank {
  fill: currentColor;
  d: path("M3 19v-1h17V5h1v14zm6.923-3.384V9.923h7.693v5.693z");
}
</style><path class="epygqxank"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:picture-in-picture-small-sharp"} {...others} />);
}

export default Component;
