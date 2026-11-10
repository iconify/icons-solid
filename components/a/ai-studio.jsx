import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.emak3nbko {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.291 14.124c4.058-2.945 1.98-7.94-1.849-8.431l-24.082.053C.663 7.498 3.783 29.574 19.39 24.84zm-6.783 27.964c13.698-1.753 10.578-23.837-5.03-19.105L7.708 33.876c-4.057 2.945-1.98 7.94 1.85 8.43z");
}
</style><path class="emak3nbko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ai-studio"} {...others} />);
}

export default Component;
