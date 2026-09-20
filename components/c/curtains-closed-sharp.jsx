import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i3cr0pqzy {
  fill: currentColor;
  d: path("M2 21v-2h2V3h16v16h2v2zm9-2h2V5h-2z");
}
</style><path class="i3cr0pqzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:curtains-closed-sharp"} {...others} />);
}

export default Component;
