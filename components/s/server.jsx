import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/no92fbboy.css';
import '../../css/z/zjq93dtts.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="no92fbboy"/><path class="zjq93dtts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:server"} {...others} />);
}

export default Component;
