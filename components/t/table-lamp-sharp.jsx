import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ap48v56cb {
  fill: currentColor;
  d: path("M13 21v-2h8v2zm3-3V7h-5v4H2.475l3.5-8H11v2h7v13z");
}
</style><path class="ap48v56cb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:table-lamp-sharp"} {...others} />);
}

export default Component;
