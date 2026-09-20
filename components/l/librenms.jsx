import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wivhkqb-l.css';
import '../../css/m/m7vfhemuf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wivhkqb-l"/><path class="m7vfhemuf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:librenms"} {...others} />);
}

export default Component;
