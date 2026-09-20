import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lkj2ekbhp {
  fill: currentColor;
  d: path("M1.77 18V6h12v12zm1-1h10V7h-10zM17 18V6h1v12zm4.23 0V6h1v12zM2.77 17V7z");
}
</style><path class="lkj2ekbhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:overview-key-outline-sharp"} {...others} />);
}

export default Component;
