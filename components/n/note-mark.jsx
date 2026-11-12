import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xsxw_objg.css';
import '../../css/w/w_fbcy7gw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xsxw_objg"/><path class="w_fbcy7gw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:note-mark"} {...others} />);
}

export default Component;
