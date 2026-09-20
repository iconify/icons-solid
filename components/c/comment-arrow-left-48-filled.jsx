import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.zftmjwbjl {
  fill: currentColor;
  d: path("M46 13c0 6.075-4.925 11-11 11s-11-4.925-11-11S28.925 2 35 2s11 4.925 11 11M33.707 7.293a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414L30.414 14H42a1 1 0 1 0 0-2H30.414l3.293-3.293a1 1 0 0 0 0-1.414M35 26c3.493 0 6.664-1.378 9-3.62v6.37A7.25 7.25 0 0 1 36.75 36H26.397l-10.85 7.658C14.058 44.71 12 43.644 12 41.82V36h-.75A7.25 7.25 0 0 1 4 28.75v-15.5A7.25 7.25 0 0 1 11.25 6h12.794A12.94 12.94 0 0 0 22 13c0 7.18 5.82 13 13 13");
}
</style><path class="zftmjwbjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:comment-arrow-left-48-filled"} {...others} />);
}

export default Component;
