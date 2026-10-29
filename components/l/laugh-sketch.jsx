import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/shcvw7bpa.css';
import '../../css/e/ejb7eacvb.css';
import '../../css/v/v41ir48ee.css';
import '../../css/k/kqwl-3bjd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="shcvw7bpa"/><path class="ejb7eacvb wm-a"/><path class="v41ir48ee wm-k"/><path class="kqwl-3bjd wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:laugh-sketch"} {...others} />);
}

export default Component;
