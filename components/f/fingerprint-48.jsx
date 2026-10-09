import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/otcc7pvhw.css';
import '../../css/p/p6vzlj6qq.css';
import '../../css/s/s7q2gertg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="otcc7pvhw"/><path class="p6vzlj6qq"/><path class="s7q2gertg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fingerprint-48"} {...others} />);
}

export default Component;
