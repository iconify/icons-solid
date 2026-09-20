import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gvw901bjd.css';
import '../../css/k/k468snbzm.css';
import '../../css/r/rqpbbk94c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gvw901bjd"/><path class="k468snbzm"/><path class="rqpbbk94c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-messages"} {...others} />);
}

export default Component;
