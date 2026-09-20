import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8gytzbiv.css';
import '../../css/n/nigc12pwn.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="g8gytzbiv"/><path class="nigc12pwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:syncpack"} {...others} />);
}

export default Component;
