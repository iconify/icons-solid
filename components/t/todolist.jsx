import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.raz7z3b8f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 12.962l11.775 7.149L42.5 5.508m-37 18.644l11.775 7.149L42.5 16.699m-37 18.643l11.775 7.15L42.5 27.889");
}
</style><path class="raz7z3b8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:todolist"} {...others} />);
}

export default Component;
