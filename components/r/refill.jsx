import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lha7k0b6q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.017 4.479c-1.042 8.421-13.405 16.365-13.405 26.16c0 9.197 7.704 12.84 14.214 12.84s12.483-6.27 12.483-14.453s-8.01-18.515-13.292-24.547");
}
</style><path class="lha7k0b6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:refill"} {...others} />);
}

export default Component;
