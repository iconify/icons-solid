import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lprml5bju {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.11 37.305C-.236 27.98 1.37 14.461 10.698 7.112c9.328-7.348 22.845-5.744 30.192 3.583c7.346 9.327 5.74 22.845-3.588 30.193a21.5 21.5 0 0 1-18.201 4.047V15.683h8.002c10.321-.18 10.576 14.788.255 14.968H19.1");
}
</style><path class="lprml5bju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:parkmobile"} {...others} />);
}

export default Component;
