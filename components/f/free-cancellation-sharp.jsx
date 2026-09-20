import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c35zo8p7a {
  fill: currentColor;
  d: path("M16.166 21.539L13.327 18.7l.689-.688l2.125 2.124l4.25-4.25l.688.714zM7.4 16.289l-.689-.689l1.6-1.6l-1.6-1.6l.689-.688l1.6 1.6l1.6-1.6l.689.688l-1.6 1.6l1.6 1.6l-.689.688l-1.6-1.6zM4 21V5h3.385V2.77h1.077V5h7.154V2.77h1V5H20v7.33l-1 1.026v-2.74H5V20h5.692l1.033 1z");
}
</style><path class="c35zo8p7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:free-cancellation-sharp"} {...others} />);
}

export default Component;
