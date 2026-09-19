import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.rkuaj9xha {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.269 37.5h2.519m2.217 0h2.519m-7.255-3.375h2.519m2.217 0h2.519m-7.255-3.375h2.519m2.217 0h2.519m-7.255-3.375h2.519m2.217 0h2.519M14.269 24h2.519m2.217 0h2.519m-7.255-3.375h2.519m2.217 0h2.519m-7.255-3.375h2.519m2.217 0h2.519m6.952 3.375h2.519m2.217 0h2.519m-7.255-3.375h2.519m2.217 0h2.519m-21.462-3.375h2.519m2.217 0h2.519M14.269 10.5h2.519m2.217 0h2.519m2.217 16.875h2.518m2.217 0h2.519M23.741 24h2.518m2.217 0h2.519m-7.254-10.125h2.518m2.217 0h2.519M23.741 10.5h2.518m2.217 0h2.519m2.217 3.375h2.519M33.212 24h2.519");
}
</style><path class="rkuaj9xha"/><circle class="cpk0fnbgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:myparking"} {...others} />);
}

export default Component;
