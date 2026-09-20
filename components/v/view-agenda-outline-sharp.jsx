import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fkyk0ubzl {
  fill: currentColor;
  d: path("M3 21v-8h18v8zm2-2h14v-4H5zm-2-8V3h18v8zm2-2h14V5H5zm0 6v4zM5 5v4z");
}
</style><path class="fkyk0ubzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-agenda-outline-sharp"} {...others} />);
}

export default Component;
