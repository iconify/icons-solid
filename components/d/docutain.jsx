import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.eknxzzp4z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.57 4.5v10.489H11.081z");
}

.k5c75tbtv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.57 4.5h2.286A17.06 17.06 0 0 1 40.92 21.563v4.875A17.06 17.06 0 0 1 23.856 43.5H11.081V14.989");
}
</style><path class="k5c75tbtv"/><path class="eknxzzp4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:docutain"} {...others} />);
}

export default Component;
