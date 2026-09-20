import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dfc0ojdum {
  fill: currentColor;
  d: path("M7.5 19v-1h9v1zm4-3.384V6.883L8.38 9.996l-.688-.688L12 5l4.308 4.308l-.689.688L12.5 6.883v8.733z");
}
</style><path class="dfc0ojdum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:upgrade-sharp"} {...others} />);
}

export default Component;
