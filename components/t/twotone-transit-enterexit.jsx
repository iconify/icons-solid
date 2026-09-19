import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uc__3tt6c {
  fill: currentColor;
  d: path("M15.98 6L9 12.77V8H6v10h10v-3h-4.85L18 8.03z");
}
</style><path class="uc__3tt6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-transit-enterexit"} {...others} />);
}

export default Component;
