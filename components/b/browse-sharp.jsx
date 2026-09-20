import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fs23tsb7q {
  fill: currentColor;
  d: path("M3 21v-6h8v6zm10 0V11h8v10zM3 13V3h8v10zm10-4V3h8v6z");
}
</style><path class="fs23tsb7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:browse-sharp"} {...others} />);
}

export default Component;
