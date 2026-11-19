import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wo29c561l.css';
import '../../css/i/iaayajjtm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wo29c561l"/><path class="iaayajjtm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:scryer-dark"} {...others} />);
}

export default Component;
