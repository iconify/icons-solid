import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.h071v56hr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.83 20.526L15.012 5.043C12.339 3.5 9 5.43 9 8.518v30.964c0 3.089 3.343 5.018 6.018 3.475l26.811-15.483c2.676-1.544 2.676-5.404 0-6.948M25.623 36.831L12.325 13.789");
}

.lkq1znbxi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9 30.848h10.039a8.53 8.53 0 0 0 0-17.059H9");
}
</style><path class="h071v56hr"/><path class="lkq1znbxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:retroplayer"} {...others} />);
}

export default Component;
