import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfh9e8-4g.css';
import '../../css/a/aou0j_yla.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qfh9e8-4g"/><path class="aou0j_yla"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:notepad-plus-plus-dark"} {...others} />);
}

export default Component;
