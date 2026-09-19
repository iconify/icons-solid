import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jz5cv8b7o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19 9h10v30H19zM6.5 9h10v30h-10zm25 0h10v30h-10zm10 25h1M29 34h2.5m-15 0H19M5.5 34h1m35-20h1M29 14h2.5m-15 0H19M5.5 14h1");
}
</style><path class="jz5cv8b7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:vibrafun"} {...others} />);
}

export default Component;
