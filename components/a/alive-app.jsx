import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.t1sipsyba {
  fill: none;
  stroke: currentColor;
  stroke-dashoffset: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.177 5.235a6.52 6.52 0 0 0-4.946.652a6.52 6.52 0 0 0-2.386 8.903l14.397 24.938a6.52 6.52 0 0 0 8.903 2.386a6.52 6.52 0 0 0 2.386-8.904L27.134 8.272a6.52 6.52 0 0 0-3.957-3.037M12.115 29.952a6.52 6.52 0 0 0-6.517 6.517a6.52 6.52 0 0 0 6.517 6.518a6.52 6.52 0 0 0 6.518-6.518a6.52 6.52 0 0 0-6.518-6.517");
  color: currentColor;
}
</style><path class="t1sipsyba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:alive-app"} {...others} />);
}

export default Component;
