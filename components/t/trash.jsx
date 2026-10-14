import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/sz2xy3_xw.css';
import '../../css/i/ih7xeac7q.css';
import '../../css/z/zu-pgi72i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="sz2xy3_xw"/><path class="ih7xeac7q"/><path class="zu-pgi72i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:trash"} {...others} />);
}

export default Component;
