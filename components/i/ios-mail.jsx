import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wq5ve83fc.css';
import '../../css/o/o4q7kwbxf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wq5ve83fc"/><path class="o4q7kwbxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-mail"} {...others} />);
}

export default Component;
