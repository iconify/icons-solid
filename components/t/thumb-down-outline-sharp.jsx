import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ey_oqgb-z {
  fill: currentColor;
  d: path("M1 16v-4.4L4.65 3H17v13l-7 7l-1.85-1.85L9.45 16zM15 5H6l-3 7v2h9l-1.35 5.5L15 15.15zm0 10.15V5zm2 .85v-2h3V5h-3V3h5v13z");
}
</style><path class="ey_oqgb-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:thumb-down-outline-sharp"} {...others} />);
}

export default Component;
