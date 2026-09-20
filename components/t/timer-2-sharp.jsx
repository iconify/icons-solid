import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a6uifebpi {
  fill: currentColor;
  d: path("M8.5 18.116v-6.731h6.77v-4.27H8.5v-1.23h8v6.73H9.73v4.27h6.77v1.23z");
}
</style><path class="a6uifebpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:timer-2-sharp"} {...others} />);
}

export default Component;
