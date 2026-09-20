import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tmyfq_blj.css';
import '../../css/a/a28a78bjh.css';
import '../../css/m/m2_srvnyi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tmyfq_blj"/><path class="a28a78bjh"/><path class="m2_srvnyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:ndst"} {...others} />);
}

export default Component;
