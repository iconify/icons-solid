import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yx_y7kbnk {
  fill: currentColor;
  d: path("M4.5 14.5q-1.05 0-1.775-.725T2 12t.725-1.775T4.5 9.5q.775 0 1.4.425T6.8 11H22v2H6.8q-.275.65-.9 1.075t-1.4.425");
}
</style><path class="yx_y7kbnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:line-start-sharp"} {...others} />);
}

export default Component;
