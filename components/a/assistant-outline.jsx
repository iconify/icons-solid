import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.puoe0vymw {
  fill: currentColor;
  d: path("m12 23l-3-3H5q-.825 0-1.413-.588T3 18V4q0-.825.588-1.413T5 2h14q.825 0 1.413.588T21 4v14q0 .825-.588 1.413T19 20h-4l-3 3Zm-7-5h4.8l2.2 2.2l2.2-2.2H19V4H5v14ZM5 4v14V4Zm8.55 8.55L17 11l-3.45-1.55L12 6l-1.55 3.45L7 11l3.45 1.55L12 16l1.55-3.45Z");
}
</style><path class="puoe0vymw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:assistant-outline"} {...others} />);
}

export default Component;
