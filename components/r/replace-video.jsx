import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ju749rb2w {
  fill: currentColor;
  d: path("M4.327 8.77q.739-2.572 2.864-4.171T12 3q2.223 0 4.099 1.144T19 7.234V4h1v4.77h-4.77v-1h2.862q-.84-1.726-2.49-2.748T12 4Q9.725 4 7.907 5.306t-2.52 3.463zM8 21q-.671 0-1.143-.472q-.473-.472-.473-1.144v-6.768q0-.672.473-1.144Q7.329 11 8 11h6.77q.67 0 1.142.472t.472 1.144V15.5L19 12.885v6.23L16.384 16.5v2.885q0 .67-.472 1.143Q15.44 21 14.77 21z");
}
</style><path class="ju749rb2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:replace-video"} {...others} />);
}

export default Component;
