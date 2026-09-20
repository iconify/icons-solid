import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ecxvtoq4h {
  fill: currentColor;
  d: path("M9 18.23h8v-3H9zm-3 1v-5h12v1.5h1.23v2H18v1.5zM7.523 7.77l.646 1.769h7.662l.646-1.77zm-.092 2.769l-.97-2.77H4V4h16v3.77h-2.461l-1.074 2.769z");
}
</style><path class="ecxvtoq4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:detector-battery-sharp"} {...others} />);
}

export default Component;
