import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.otil38bqp {
  fill: currentColor;
  d: path("M2 20L12 4l10 16z");
}
</style><path class="otil38bqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:change-history-sharp"} {...others} />);
}

export default Component;
