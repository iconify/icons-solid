import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.khl-rdbee {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.35 37.194c11.767 7.215 23.533 6.951 35.3 0l-7.602-4.554c-6.37 3.9-12.97 4.212-20.096 0Zm0-13.092v-7.685l17.555-10.91L41.65 16.512v7.59l-17.745-10.53Z");
}

.ld3mbjbzn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.35 37.194v-6.546l17.555-10.364L41.65 30.648v6.546L23.905 26.485Z");
}
</style><path class="khl-rdbee"/><path class="ld3mbjbzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:call-of-duty-companion"} {...others} />);
}

export default Component;
