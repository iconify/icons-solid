import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.f-oj810zh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.125 19.125A4.875 4.875 0 1 1 24 24h-4.875zM9.375 33.75h9.75v9.75h-9.75z");
}

.zwqsu0b1l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.375 19.125C9.375 11.048 15.923 4.5 24 4.5s14.625 6.548 14.625 14.625S32.077 33.75 24 33.75H9.375z");
}
</style><path class="zwqsu0b1l"/><path class="f-oj810zh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:parkmate"} {...others} />);
}

export default Component;
