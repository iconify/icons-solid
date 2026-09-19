import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gs99ztb-t.css';
import '../../css/m/mcbwykhxe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gs99ztb-t"/><path class="mcbwykhxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:plane-ticket"} {...others} />);
}

export default Component;
