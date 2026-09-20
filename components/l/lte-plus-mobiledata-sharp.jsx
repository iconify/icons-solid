import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rztkyjutf {
  fill: currentColor;
  d: path("M1.75 15.5v-7h1v6h3v1zm6.192 0v-6h-2v-1h5v1h-2v6zm4.654 0v-7h4v1h-3v2h3v1h-3v2h3v1zm7.654-1v-2h-2v-1h2v-2h1v2h2v1h-2v2z");
}
</style><path class="rztkyjutf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:lte-plus-mobiledata-sharp"} {...others} />);
}

export default Component;
