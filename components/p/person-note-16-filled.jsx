import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.ba8rm6e5n {
  fill: currentColor;
  d: path("M6 10v3.928C3.469 13.549 2 11.752 2 10v-.5A1.5 1.5 0 0 1 3.5 8h3.264A3 3 0 0 0 6 10m1-8.5A2.75 2.75 0 1 1 7 7a2.75 2.75 0 0 1 0-5.5M9 8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm.5 5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1 0-1M9 10.5a.5.5 0 0 1 .5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5");
}
</style><path class="ba8rm6e5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:person-note-16-filled"} {...others} />);
}

export default Component;
