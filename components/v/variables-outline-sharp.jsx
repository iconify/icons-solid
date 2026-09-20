import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.skr-doe8g {
  fill: currentColor;
  d: path("M3 17V7h18v10zm2-2h14V9H5zm0 0V9z");
}
</style><path class="skr-doe8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:variables-outline-sharp"} {...others} />);
}

export default Component;
