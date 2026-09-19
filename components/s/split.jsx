import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/alkj0g3as.css';
import '../../css/x/x8u5udbtz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="alkj0g3as"/><rect class="x8u5udbtz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:split"} {...others} />);
}

export default Component;
