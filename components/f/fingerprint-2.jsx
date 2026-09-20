import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/wjy-l3ujq.css';
import '../../css/y/ymv7k9jac.css';
import '../../css/k/k80w_2bwa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="wjy-l3ujq"/><path class="ymv7k9jac"/><path class="k80w_2bwa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:fingerprint-2"} {...others} />);
}

export default Component;
