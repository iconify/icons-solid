import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vrjrc8b7q {
  fill: currentColor;
  d: path("M2 17V7h20v10z");
}
</style><path class="vrjrc8b7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:crop-21-9-sharp"} {...others} />);
}

export default Component;
