import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.pjjps443x {
  fill: currentColor;
  d: path("M5 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm4.59 3.992L9.5 5h-3a.5.5 0 0 1-.09-.992L6.5 4h3a.5.5 0 0 1 .09.992M10 8a.5.5 0 0 1-.41.492L9.5 8.5h-3a.5.5 0 0 1-.09-.992L6.5 7.5h3a.5.5 0 0 1 .5.5m0 3.492a.5.5 0 0 1-.41.492l-.09.008h-3A.5.5 0 0 1 6.41 11l.09-.008h3a.5.5 0 0 1 .5.5");
}
</style><path class="pjjps443x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:document-one-page-16-filled"} {...others} />);
}

export default Component;
