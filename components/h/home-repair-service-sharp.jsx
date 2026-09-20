import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vyduodyae {
  fill: currentColor;
  d: path("M9 8h6V6H9zM2 20v-5h4v1h2v-1h8v1h2v-1h4v5zm0-6V8h5V4h10v4h5v6h-4v-2h-2v2H8v-2H6v2z");
}
</style><path class="vyduodyae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:home-repair-service-sharp"} {...others} />);
}

export default Component;
