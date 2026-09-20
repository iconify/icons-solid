import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xmvnetbdq {
  fill: currentColor;
  d: path("M13 16h5V8h-5zm-7 0h5V8H6zm-4 4V4h20v16z");
}
</style><path class="xmvnetbdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:splitscreen-landscape-sharp"} {...others} />);
}

export default Component;
