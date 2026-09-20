import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.kttsq8-fl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.182 11.59H43.5v24.82h-5.318A12.41 12.41 0 0 1 25.772 24a12.41 12.41 0 0 1 12.41-12.41M9.818 36.41H4.5V11.59h5.318A12.41 12.41 0 0 1 22.227 24a12.41 12.41 0 0 1-12.41 12.41");
}
</style><path class="kttsq8-fl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:dolby"} {...others} />);
}

export default Component;
