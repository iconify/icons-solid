import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.wqig7lvne {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.806 40.838a3.097 3.097 0 0 0 6.194 0V23.565m-19.5 0a19.5 19.5 0 0 1 39 0a4.875 4.875 0 1 0-9.75 0a4.875 4.875 0 1 0-9.75 0a4.875 4.875 0 1 0-9.75 0a4.875 4.875 0 1 0-9.75 0");
}
</style><path class="wqig7lvne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:umbrella"} {...others} />);
}

export default Component;
