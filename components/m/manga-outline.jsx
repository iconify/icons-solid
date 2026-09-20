import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d_0b8o21l {
  fill: currentColor;
  d: path("M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm6.575-2H20v-7.725l-.675-.925L17 10.1l-2.3-.75l-1.45 1.975l-2.325.75v2.45L9.5 16.5zM8.1 18l-1.075-1.5l1.9-2.625v-3.25l3.075-1L13.925 7L17 8l3-.975V6H4v12zm2.825-5.925");
}
</style><path class="d_0b8o21l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:manga-outline"} {...others} />);
}

export default Component;
