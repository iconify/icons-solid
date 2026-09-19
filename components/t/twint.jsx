import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.k0dz94b0s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 23.958L32.804 38.054L20.018 21.202h0a7.076 7.076 0 1 1 11.422 0h0L18.652 38.054L5.865 21.202h0a7.08 7.08 0 0 1 7.62-10.995");
}
</style><path class="k0dz94b0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:twint"} {...others} />);
}

export default Component;
