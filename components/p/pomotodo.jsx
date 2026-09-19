import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.hjpcmkgoi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5a21.515 21.515 0 1 0 18.816 11.11c-11.228 7.287-19.31 19.874-19.31 19.874l-10.8-12.035l2.827-2.676L22.89 24s10.096-8.369 18.492-12.646A21.5 21.5 0 0 0 24 2.5");
}
</style><path class="hjpcmkgoi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pomotodo"} {...others} />);
}

export default Component;
