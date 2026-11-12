import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9wlxgsem.css';
import '../../css/q/qj8o2tblv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m9wlxgsem"/><path class="qj8o2tblv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fileflows-forge-light"} {...others} />);
}

export default Component;
