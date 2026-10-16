import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ague2ubah.css';
import '../../css/h/hv0bd7b7k.css';
import '../../css/g/g3zhl709q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ague2ubah"/><path class="hv0bd7b7k"/><path class="g3zhl709q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:settlement-48"} {...others} />);
}

export default Component;
