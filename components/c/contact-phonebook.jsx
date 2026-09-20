import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/y/y_mzvybbi.css';
import '../../css/t/tojp-3b8u.css';
import '../../css/g/gxke3_qzz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="y_mzvybbi"/><path class="tojp-3b8u"/><path class="gxke3_qzz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:contact-phonebook"} {...others} />);
}

export default Component;
