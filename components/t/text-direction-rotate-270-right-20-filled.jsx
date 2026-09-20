import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.p109rhbrl {
  fill: currentColor;
  d: path("M4.22 5.22a.75.75 0 0 0 1.06 1.06L6 5.56v3.69a.75.75 0 0 0 1.5 0V5.56l.72.72a.75.75 0 0 0 1.06-1.06l-2-2A.75.75 0 0 0 6.752 3h-.004a.75.75 0 0 0-.528.22zm7.5 0a.75.75 0 1 0 1.06 1.06l.72-.72v10.69a.75.75 0 1 0 1.5 0V5.56l.72.72a.75.75 0 0 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0zM3 13.5a.75.75 0 0 1 .471-.696l7.5-3a.75.75 0 1 1 .557 1.393l-2.028.81v2.985l2.028.812a.75.75 0 0 1-.556 1.393l-7.5-3A.75.75 0 0 1 3 13.5m2.77 0l2.23.892v-1.784z");
}
</style><path class="p109rhbrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-direction-rotate-270-right-20-filled"} {...others} />);
}

export default Component;
