import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aohd8lrit {
  fill: currentColor;
  d: path("M1 20V4h6v16zm2-1.975h2V5.975H3zM9 20V4h14v16zm2-1.975h10V5.975H11zm-6 0V5.975zm6 0V5.975z");
}
</style><path class="aohd8lrit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:transition-slide-outline-sharp"} {...others} />);
}

export default Component;
