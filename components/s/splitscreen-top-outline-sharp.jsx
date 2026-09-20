import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.udax7gwxi {
  fill: currentColor;
  d: path("M3 11V3h18v8zm0 10v-8h18v8zm2-2h14v-4H5z");
}
</style><path class="udax7gwxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:splitscreen-top-outline-sharp"} {...others} />);
}

export default Component;
