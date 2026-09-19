import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nbz_v2bkl {
  fill: currentColor;
  d: path("M21 4H3v16h18zm-10 7H9.5v-.5h-2v3h2V13H11v2H6V9h5zm7 0h-1.5v-.5h-2v3h2V13H18v2h-5V9h5z");
}
</style><path class="nbz_v2bkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-closed-caption"} {...others} />);
}

export default Component;
