import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h4zf6dbrg {
  fill: currentColor;
  d: path("m6 16l4-4l-4-4l-1.4 1.4L6.2 11H2v2h4.2l-1.6 1.6zm11.213-8.287Q17.5 7.425 17.5 7t-.288-.712T16.5 6t-.712.288T15.5 7t.288.713T16.5 8t.713-.288M13 19h7V5h-7zm-9 2q-.825 0-1.412-.587T2 19v-4h2v4h7V5H4v4H2V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v14q0 .825-.587 1.413T20 21zm7-16v14z");
}
</style><path class="h4zf6dbrg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:rear-camera-outline"} {...others} />);
}

export default Component;
