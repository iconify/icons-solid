import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0eg7x6yw.css';
import '../../css/z/z60z84bjv.css';
import '../../css/n/nigkucbvm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t0eg7x6yw"/><path class="z60z84bjv"/><circle class="nigkucbvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sftpgo"} {...others} />);
}

export default Component;
