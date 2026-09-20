import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/u/uqf_-fqgb.css';
import '../../css/m/m2r624k3x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="uqf_-fqgb"/><path class="m2r624k3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:multiple-stars"} {...others} />);
}

export default Component;
