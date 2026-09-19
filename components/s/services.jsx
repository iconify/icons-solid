import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wabg6tf_x.css';
import '../../css/c/ck9b5hbsn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wabg6tf_x"/><path class="ck9b5hbsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:services"} {...others} />);
}

export default Component;
