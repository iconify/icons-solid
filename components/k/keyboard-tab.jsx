import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bgpe15btd {
  fill: currentColor;
  d: path("M20 17.5v-11h1v11zm-7.673-.212l-.713-.688l4.1-4.1H3v-1h12.694l-4.056-4.1l.689-.688L17.616 12z");
}
</style><path class="bgpe15btd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:keyboard-tab"} {...others} />);
}

export default Component;
