import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.u-vcn7l7a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.643 5.5L7.667 17.47c-.72.72-.72 1.88 0 2.6l9.206 9.2h8.94l-10.07-10.067a.61.61 0 0 1 0-.866L28.586 5.5z");
}

.x0fwzzvzb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28.357 42.5l11.976-11.97c.72-.72.72-1.88 0-2.6l-9.206-9.2h-8.94l10.07 10.067a.61.61 0 0 1 0 .866L19.414 42.5z");
}
</style><path class="u-vcn7l7a"/><path class="x0fwzzvzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:bitget"} {...others} />);
}

export default Component;
