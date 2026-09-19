import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.riw6fbbyg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28.455 38.525l-12.66-11.74l-4.3 9.29l-5.85.6l9.51-25.8l16.78 15.25");
}

.vrfu-nbad {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.545 9.475l12.65 11.74l4.31-9.29l5.85-.6l-9.51 25.8l-16.78-15.25");
}
</style><path class="riw6fbbyg"/><path class="vrfu-nbad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:nonton-anime"} {...others} />);
}

export default Component;
