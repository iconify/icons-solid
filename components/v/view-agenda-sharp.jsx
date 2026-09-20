import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.leprq-4jz {
  fill: currentColor;
  d: path("M3 21v-8h18v8zm0-10V3h18v8z");
}
</style><path class="leprq-4jz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-agenda-sharp"} {...others} />);
}

export default Component;
