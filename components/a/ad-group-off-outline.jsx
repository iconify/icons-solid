import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jbkupsbts {
  fill: currentColor;
  d: path("M20.7 17.875L18.825 16H20V6H8.825l-2.7-2.7q.2-.6.713-.95T8 2h12q.825 0 1.413.588T22 4v12q0 .65-.35 1.163t-.95.712m-.2 5.425L15.2 18H8q-.825 0-1.412-.587T6 16V8.8L.7 3.5l1.4-1.4l19.8 19.8zM8 16h5.2L8 10.8zm-4 6q-.825 0-1.412-.587T2 20V6h2v14h14v2zm9.475-11.35");
}
</style><path class="jbkupsbts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:ad-group-off-outline"} {...others} />);
}

export default Component;
