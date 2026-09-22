import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d_ifomx9h {
  fill: currentColor;
  d: path("M9 20q-.425 0-.712-.288T8 19v-6L2.2 5.6q-.125-.125-.162-.287T2 5q0-.375.275-.687T3 4h14q.45 0 .725.313T18 5q0 .15-.038.313T17.8 5.6L12 13v6q0 .425-.288.713T11 20zm8 0v-3h-3v-2h3v-3h2v3h3v2h-3v3z");
}
</style><path class="d_ifomx9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:filter-plus"} {...others} />);
}

export default Component;
