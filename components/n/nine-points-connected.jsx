import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xuw8ucyks.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xuw8ucyks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:nine-points-connected"} {...others} />);
}

export default Component;
