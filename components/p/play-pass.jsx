import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xu257hbth {
  fill: currentColor;
  d: path("M12 20q-.825 0-1.413.588T10 22H7q-.825 0-1.413-.588T5 20V4q0-.825.588-1.413T7 2h3q0 .825.588 1.413T12 4q.825 0 1.413-.588T14 2h3q.825 0 1.413.588T19 4v16q0 .825-.588 1.413T17 22h-3q0-.825-.588-1.413T12 20Z");
}
</style><path class="xu257hbth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:play-pass"} {...others} />);
}

export default Component;
