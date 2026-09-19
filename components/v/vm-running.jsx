import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wz8te_bpd.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="wz8te_bpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:vm-running"} {...others} />);
}

export default Component;
