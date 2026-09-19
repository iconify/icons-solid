import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i64c76btm {
  fill: currentColor;
  d: path("M16 18v2H8v-2zM11 7.99V16h2V7.99h3L12 4L8 7.99z");
}
</style><path class="i64c76btm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-upgrade"} {...others} />);
}

export default Component;
