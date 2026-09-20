import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hixlo8gbn {
  fill: currentColor;
  d: path("M2 22L22 2v20zm13-2h5V6.85l-5 5z");
}
</style><path class="hixlo8gbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:signal-cellular-3-bar-sharp"} {...others} />);
}

export default Component;
