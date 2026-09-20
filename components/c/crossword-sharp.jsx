import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pon1rub3t {
  fill: currentColor;
  d: path("M9.25 21v-5.48h5.48V21zM3 14.75V9.27h5.48v5.48zm6.25 0V9.27h5.48v5.48zm6.25 0V9.27H21v5.48zm0-6.25V3H21v5.5z");
}
</style><path class="pon1rub3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:crossword-sharp"} {...others} />);
}

export default Component;
