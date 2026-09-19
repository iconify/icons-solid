import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vniy-9pnf.css';
import '../../css/r/rp8lt1bxe.css';
import '../../css/j/jmlntsbsv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vniy-9pnf"/><path class="rp8lt1bxe"/><path class="jmlntsbsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:news-duotone"} {...others} />);
}

export default Component;
