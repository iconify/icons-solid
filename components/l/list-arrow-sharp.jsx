import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t_kt0dpav {
  fill: currentColor;
  d: path("M6.173 18.904L3 15.769l.708-.688l1.965 1.877V5.904h1v11.054l1.985-1.877l.688.688zm6.193-.808v-1H21v1zm0-5.577v-1H21v1zm0-5.577v-1H21v1z");
}
</style><path class="t_kt0dpav"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:list-arrow-sharp"} {...others} />);
}

export default Component;
