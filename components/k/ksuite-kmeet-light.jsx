import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yc6ttac-i.css';
import '../../css/k/kysr9_zzg.css';
import '../../css/x/x0ucnnbbj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yc6ttac-i"/><path class="kysr9_zzg"/><path class="x0ucnnbbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-kmeet-light"} {...others} />);
}

export default Component;
