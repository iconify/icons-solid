import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ud4tzydmp.css';
import '../../css/v/vj4zwzbst.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ud4tzydmp"/><path class="vj4zwzbst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bank-of-america"} {...others} />);
}

export default Component;
