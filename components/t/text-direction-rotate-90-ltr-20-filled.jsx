import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.m9yzvacwi {
  fill: currentColor;
  d: path("M17 6.5a.75.75 0 0 0-.471-.696l-7.5-3a.75.75 0 0 0-.557 1.392l2.028.812v2.984l-2.028.812a.75.75 0 1 0 .557 1.392l7.5-3A.75.75 0 0 0 17 6.5m-2.77 0L12 7.392V5.608zM5 3.75a.75.75 0 0 1 1.5 0v10.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l.72.72zm8 7a.75.75 0 0 1 1.5 0v3.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l.72.72z");
}
</style><path class="m9yzvacwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-direction-rotate-90-ltr-20-filled"} {...others} />);
}

export default Component;
