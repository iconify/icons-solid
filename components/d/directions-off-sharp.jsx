import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e3jy9snwq {
  fill: currentColor;
  d: path("m21.11 22.53l-5.13-5.134L12 21.377L2.623 12l4.694-4.694l5.78 5.76V14.5L1.886 3.308l.713-.714l19.223 19.223zM8.5 14.48h1v-3h2.006l-1-1H9.308q-.33 0-.568.24q-.24.24-.24.568zm9.6.797l-3.035-3.054l1.243-1.242L14 8.692v1.789h-.677L8.723 5.9L12 2.623L21.377 12z");
}
</style><path class="e3jy9snwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:directions-off-sharp"} {...others} />);
}

export default Component;
