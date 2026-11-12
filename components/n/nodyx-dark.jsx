import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hoz0x3i9y.css';
import '../../css/w/wdbzpzb4d.css';
import '../../css/u/ujiru_9cc.css';
import '../../css/h/hmuh4ybby.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hoz0x3i9y"/><circle class="wdbzpzb4d"/><path class="ujiru_9cc"/><path class="hmuh4ybby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nodyx-dark"} {...others} />);
}

export default Component;
