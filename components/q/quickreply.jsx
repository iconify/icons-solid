import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gi7gjuq9d {
  fill: currentColor;
  d: path("M19 23v-5h-2v-6h5l-1.7 4h2.2zM2 22V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v6h-7v8H6z");
}
</style><path class="gi7gjuq9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:quickreply"} {...others} />);
}

export default Component;
