import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ivomhabac {
  fill: currentColor;
  d: path("M2 18V6h20v12zm3.5-1h13V7h-13z");
}
</style><path class="ivomhabac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:stay-current-landscape-sharp"} {...others} />);
}

export default Component;
