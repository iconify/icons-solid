import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ohtxlj07x {
  fill: currentColor;
  d: path("M20.7 17.85L4.85 2H20q.825 0 1.413.588T22 4v12q0 .65-.363 1.138t-.937.712m-.2 5.45L15.15 18H6l-4 4V4.8L.7 3.5l1.4-1.4l19.8 19.8z");
}
</style><path class="ohtxlj07x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:chat-bubble-off"} {...others} />);
}

export default Component;
