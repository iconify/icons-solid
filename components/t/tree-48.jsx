import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3_p_x84g.css';
import '../../css/v/ve426zb6c.css';
import '../../css/l/lx7eh7b9b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r3_p_x84g"/><path class="ve426zb6c"/><path class="lx7eh7b9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tree-48"} {...others} />);
}

export default Component;
