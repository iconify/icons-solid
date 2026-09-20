import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rhfeptotx.css';
import '../../css/o/obwtx-c8u.css';
import '../../css/v/vef42hohb.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="rhfeptotx"/><path class="obwtx-c8u"/><path class="vef42hohb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:time-lapse-flat"} {...others} />);
}

export default Component;
