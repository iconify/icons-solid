import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6ctizbcx.css';
import '../../css/m/m8et6-xvo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e6ctizbcx"/><path class="m8et6-xvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:roundcube-dark"} {...others} />);
}

export default Component;
