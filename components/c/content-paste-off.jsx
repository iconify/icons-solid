import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t6vbszbju {
  fill: currentColor;
  d: path("m21 18.15l-2-2V5h-2v3h-6.15l-5-5h3.325q.275-.875 1.075-1.437T12 1q1 0 1.788.563T14.85 3H19q.825 0 1.413.588T21 5zM12.713 4.713Q13 4.425 13 4t-.288-.712T12 3t-.712.288T11 4t.288.713T12 5t.713-.288M16.15 19L5 7.85V19zM5 21q-.825 0-1.412-.587T3 19V5.85L1.375 4.225L2.8 2.8l18.4 18.4l-1.425 1.425L18.15 21z");
}
</style><path class="t6vbszbju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:content-paste-off"} {...others} />);
}

export default Component;
