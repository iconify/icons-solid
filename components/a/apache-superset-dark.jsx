import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wff71wb4h.css';
import '../../css/t/t01rqxb1d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wff71wb4h"/><path class="t01rqxb1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:apache-superset-dark"} {...others} />);
}

export default Component;
