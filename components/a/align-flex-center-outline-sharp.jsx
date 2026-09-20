import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.okyyh3bbp {
  fill: currentColor;
  d: path("M11.692 21v-8H3.5v-2h8.192V3h1v8H20.5v2h-7.808v8z");
}
</style><path class="okyyh3bbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:align-flex-center-outline-sharp"} {...others} />);
}

export default Component;
