import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l37npu1fk.css';
import '../../css/s/sp_sykbev.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l37npu1fk"/><path class="sp_sykbev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rancher-rke"} {...others} />);
}

export default Component;
