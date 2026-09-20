import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.afs69qbhv {
  fill: currentColor;
  d: path("M4 22V2h16v20zm2-11h4v-1h4v1h4V4H6zm0 2v7h12v-7zm0 7h12z");
}
</style><path class="afs69qbhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:sensor-window-outline-sharp"} {...others} />);
}

export default Component;
