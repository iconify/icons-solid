import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.bn_xn0pon {
  fill: currentColor;
  d: path("m2.089 2.216l.057-.07a.5.5 0 0 1 .638-.057l.07.057L6 5.293l3.146-3.147a.5.5 0 1 1 .708.708L6.707 6l3.147 3.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057L6 6.707L2.854 9.854a.5.5 0 0 1-.708-.708L5.293 6L2.146 2.854a.5.5 0 0 1-.057-.638l.057-.07z");
}
</style><path class="bn_xn0pon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:dismiss-12-regular"} {...others} />);
}

export default Component;
