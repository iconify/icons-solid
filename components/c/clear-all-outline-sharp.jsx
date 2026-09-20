import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r7wqj2bvy {
  fill: currentColor;
  d: path("M3 17v-2h14v2zm2-4v-2h14v2zm2-4V7h14v2z");
}
</style><path class="r7wqj2bvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:clear-all-outline-sharp"} {...others} />);
}

export default Component;
