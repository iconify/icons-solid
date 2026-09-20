import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rebsbab5s {
  fill: currentColor;
  d: path("m21.11 22.53l-9.723-9.722H4v7h12v-3.814l1 1v3.814H3v-11h4V8.42L1.887 3.308l.713-.714l19.223 19.223zm-4.072-8.309L16 13.183v-.347h-.346l-3.029-3.028H17v3.384h3v-7H9.01L7.092 4.275V3.192H21v11h-3.962z");
}
</style><path class="rebsbab5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:select-window-off-outline-sharp"} {...others} />);
}

export default Component;
