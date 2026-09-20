import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a7gqzdbdf {
  fill: currentColor;
  d: path("M7 7V4H2V2h20v2h-5v3zM2 22v-2h5v-3h10v3h5v2z");
}
</style><path class="a7gqzdbdf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:align-space-between-sharp"} {...others} />);
}

export default Component;
