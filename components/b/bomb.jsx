import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/khkp-mbgo.css';
import '../../css/z/z5iaqeazo.css';
import '../../css/a/ae005kbnl.css';
import '../../css/b/bpjq-fbrz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="khkp-mbgo"/><path class="z5iaqeazo"/><path class="ae005kbnl"/><path class="bpjq-fbrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:bomb"} {...others} />);
}

export default Component;
