import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t999mjbnh {
  fill: currentColor;
  d: path("M7 20.5v-1h4.5v-6.573l-8.754-8.76l.708-.713l17.092 17.092l-.713.714l-7.333-7.333V19.5H17v1zm7.07-9.242l-.695-.683L15.66 8h-4.854l-.994-1h6.738l1.8-2H7.811l-1-1h12.843v1zm-1.99-1.983");
}
</style><path class="t999mjbnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:no-drinks-outline"} {...others} />);
}

export default Component;
