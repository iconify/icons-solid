import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/v/v9myf9bmx.css';
import '../../css/p/pdzzspcnx.css';
import '../../css/p/p26y3yb2w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="v9myf9bmx"/><circle class="pdzzspcnx"/><path class="p26y3yb2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:file-dock-search-light"} {...others} />);
}

export default Component;
