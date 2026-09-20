import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ykqjh5npp.css';
import '../../css/t/tvigq4bta.css';
import '../../css/l/lspatcbsm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ykqjh5npp"/><path class="tvigq4bta"/><path class="lspatcbsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-chk-dark"} {...others} />);
}

export default Component;
