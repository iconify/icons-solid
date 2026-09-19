import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.zzyq9obwd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.68 26.53H7a2.53 2.53 0 0 1 0-5.06h12.68a2.53 2.53 0 0 1 0 5.06m21.29 0H28.32a2.53 2.53 0 0 1 0-5.06H41a2.53 2.53 0 0 1 0 5.06Z");
}
</style><path class="zzyq9obwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:om"} {...others} />);
}

export default Component;
