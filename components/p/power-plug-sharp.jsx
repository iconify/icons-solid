import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ufn9jdg5n {
  fill: currentColor;
  d: path("M9.5 21v-3L6 14.5V7h2V3h2v4h4V3h2v4h2v7.5L14.5 18v3z");
}
</style><path class="ufn9jdg5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:power-plug-sharp"} {...others} />);
}

export default Component;
