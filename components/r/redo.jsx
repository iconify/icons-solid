import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vcukmpbrx.css';
import '../../css/i/i-e-g7o-e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="vcukmpbrx"/><path class="i-e-g7o-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:redo"} {...others} />);
}

export default Component;
