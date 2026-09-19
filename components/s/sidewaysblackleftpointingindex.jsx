import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kmq46fbhw.css';
import '../../css/x/xiovtcd0b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kmq46fbhw"/><path class="xiovtcd0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:sidewaysblackleftpointingindex"} {...others} />);
}

export default Component;
