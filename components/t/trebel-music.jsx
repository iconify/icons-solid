import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.sz-f27bzu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.546 32.84V5.5h-8.078v29.544h0a7.457 7.457 0 0 0 7.457 7.456h5.705v-7.456h-2.88a2.203 2.203 0 0 1-2.204-2.203m11.597-14.68l-8.05-4.647v9.295zM14.91 13.514v9.295m-5.053-9.295v9.295");
}
</style><path class="sz-f27bzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:trebel-music"} {...others} />);
}

export default Component;
