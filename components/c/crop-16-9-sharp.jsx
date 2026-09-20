import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.twmi7nbnm {
  fill: currentColor;
  d: path("M3 17V7h18v10z");
}
</style><path class="twmi7nbnm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:crop-16-9-sharp"} {...others} />);
}

export default Component;
