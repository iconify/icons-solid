import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.whoommbjo {
  fill: currentColor;
  d: path("m9.667 20.47l-.707-.708l9.8-9.8h-2.216v-1h3.923v3.923h-1v-2.216zm-1.23-5.62L3.933 4.804l.688-.708L14.63 8.67l-.715.735l-2.727-1.281l-3.285 3.285l1.27 2.727zm-.939-4.3l2.83-2.82l-5.08-2.388l-.07.07z");
}
</style><path class="whoommbjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:text-rotation-angleup"} {...others} />);
}

export default Component;
