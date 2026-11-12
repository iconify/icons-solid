import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/akblwld7m.css';
import '../../css/e/eh3oe3bws.css';
import '../../css/l/lspatcbsm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="akblwld7m"/><path class="eh3oe3bws"/><path class="lspatcbsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-chk-dark"} {...others} />);
}

export default Component;
