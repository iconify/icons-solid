import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lh3mv9bxy {
  fill: currentColor;
  d: path("M1.77 18V6h1v12zM6 18V6h1v12zm4.23 0V6h12v12zm1-1h10V7h-10zm1.462-2.23h7.077l-2.138-2.886l-1.9 2.5l-1.4-1.85zM11.231 17V7z");
}
</style><path class="lh3mv9bxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:burst-mode-outline-sharp"} {...others} />);
}

export default Component;
