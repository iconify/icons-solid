import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.idcs78bwv {
  fill: currentColor;
  d: path("M11.5 21.308v-8.1l-5.1 5.1l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.1 5.1v-8.1h.5L17.008 7.7l-4.3 4.3l4.3 4.3L12 21.308zm1-10.516L15.592 7.7L12.5 4.62zm0 8.589l3.092-3.081l-3.092-3.092z");
}
</style><path class="idcs78bwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:bluetooth"} {...others} />);
}

export default Component;
