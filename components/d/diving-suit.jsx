import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5cg8fb9r.css';
import '../../css/e/e80_rbc2p.css';
import '../../css/r/rz0g--bqu.css';
import '../../css/h/hdkq8bcit.css';
import '../../css/a/asgrbsb4f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="y5cg8fb9r"><path class="e80_rbc2p"/><path class="rz0g--bqu"/><path class="hdkq8bcit"/><path class="asgrbsb4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:diving-suit"} {...others} />);
}

export default Component;
