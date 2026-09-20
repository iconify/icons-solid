import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sfj_hbcxi {
  fill: currentColor;
  d: path("M12 17h2V7h-4v2h2zm9 4H3V3h18z");
}
</style><path class="sfj_hbcxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:looks-one-sharp"} {...others} />);
}

export default Component;
