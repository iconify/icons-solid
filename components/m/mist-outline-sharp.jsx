import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.we6sz4bgf {
  fill: currentColor;
  d: path("M3.5 18.5v-1h11v1zm14 0v-1h3v1zm-14-4v-1h3v1zm6 0v-1h11v1zm-6-4v-1h12v1zm15 0v-1h2v1zm-15-4v-1h6v1zm9 0v-1h8v1z");
}
</style><path class="we6sz4bgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:mist-outline-sharp"} {...others} />);
}

export default Component;
