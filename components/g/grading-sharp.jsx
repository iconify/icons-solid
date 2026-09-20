import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uld6wngev {
  fill: currentColor;
  d: path("m15.964 19.994l-2.133-2.132l.688-.689l1.425 1.425l3.348-3.348l.708.708zM4 20v-1h8v1zm0-3.75v-1h8v1zm0-3.75v-1h16v1zm0-3.75v-1h16v1zM4 5V4h16v1z");
}
</style><path class="uld6wngev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:grading-sharp"} {...others} />);
}

export default Component;
