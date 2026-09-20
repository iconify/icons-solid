import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.idkrp03-j {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h5V6H4zm11 0h5V6h-5z");
}
</style><path class="idkrp03-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:width-normal-sharp"} {...others} />);
}

export default Component;
