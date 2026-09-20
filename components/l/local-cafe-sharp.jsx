import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b08-0mbcp {
  fill: currentColor;
  d: path("M4 21v-2h16v2zm0-4V3h18v7h-4v7zm14-9h2V5h-2z");
}
</style><path class="b08-0mbcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:local-cafe-sharp"} {...others} />);
}

export default Component;
