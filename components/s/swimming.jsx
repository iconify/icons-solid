import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/veir1qbiz.css';
import '../../css/a/a5u582bgm.css';
import '../../css/g/gy7khnb4s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="veir1qbiz"/><circle class="a5u582bgm"/><path class="gy7khnb4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:swimming"} {...others} />);
}

export default Component;
