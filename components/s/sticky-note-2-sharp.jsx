import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cb3_dubzl {
  fill: currentColor;
  d: path("M19 14h-5v5zM4 20V4h16v10.289L14.288 20zm3.885-6.539H12v-1H7.885zm0-3.961h8.23v-1h-8.23z");
}
</style><path class="cb3_dubzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:sticky-note-2-sharp"} {...others} />);
}

export default Component;
