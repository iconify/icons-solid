import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/laypnctxv.css';
import '../../css/p/pqht0qb6q.css';
import '../../css/e/eb9uwtqnk.css';
import '../../css/f/fwy-nwbmu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="laypnctxv"/><path clip-rule="evenodd" class="pqht0qb6q"/><path class="eb9uwtqnk"/><path clip-rule="evenodd" class="fwy-nwbmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bedside-table-bold-duotone"} {...others} />);
}

export default Component;
