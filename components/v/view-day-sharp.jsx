import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kzcjnca3y {
  fill: currentColor;
  d: path("M4 18.77v-1h16v1zM4 15V9h16v6zm0-8.77v-1h16v1z");
}
</style><path class="kzcjnca3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:view-day-sharp"} {...others} />);
}

export default Component;
