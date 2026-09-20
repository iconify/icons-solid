import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mqwcj0b4q {
  fill: currentColor;
  d: path("M16 17.096v-1h3.33l-6.026-5.938l-4 4L3 7.804l.708-.708l5.596 5.596l4-4L20 15.39v-3.293h1v5z");
}
</style><path class="mqwcj0b4q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:trending-down-sharp"} {...others} />);
}

export default Component;
