import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/y/y8v1mtbuh.css';
import '../../css/y/yp12bubun.css';
import '../../css/b/bcjvuuw-u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="y8v1mtbuh"/><path class="yp12bubun"/><path class="bcjvuuw-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:delete-two"} {...others} />);
}

export default Component;
