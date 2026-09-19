import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.t63jxq9oz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28.347 22.845l9.222-.455l.413 3.214l-7.954 15.122M20.752 5.899l-10.44 14.388l.46 3.426l12.529-.619");
}

.z50rzkfwf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.798 6.39L32.93 5.5l.13 2.462l-20.05 31.086l.385 3.452l28.808-3.07");
}
</style><path class="z50rzkfwf"/><path class="t63jxq9oz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:zenless-zone-zero"} {...others} />);
}

export default Component;
