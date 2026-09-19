import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.qbahdmh6l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.419 37.914l10.54-19.222l-4.954-8.606L12.51 37.914zm0 0H43.5L32.96 18.692M12.51 37.914H4.5l12.298-22.09l4.039 7.136");
}
</style><path class="qbahdmh6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:alpimaps"} {...others} />);
}

export default Component;
