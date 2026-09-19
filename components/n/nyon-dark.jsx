import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.phvm9mmzz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.16 7.14v19.152l12.875 12.516l-.359-30.879L36.84 21.01v19.85L23.909 27.929M11.16 7.14l12.516 12.516");
}
</style><path class="phvm9mmzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:nyon-dark"} {...others} />);
}

export default Component;
