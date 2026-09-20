import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/s/ss8bevb4j.css';
import '../../css/s/sbkk57n0y.css';
import '../../css/c/copwssbpe.css';
import '../../css/p/pvvn03bcf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ss8bevb4j"/><path class="sbkk57n0y"/><path class="copwssbpe"/><path class="pvvn03bcf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:align-object-left"} {...others} />);
}

export default Component;
