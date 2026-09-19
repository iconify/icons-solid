import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/a/ayejp5iod.css';
import '../../css/e/ecuga9b_u.css';
import '../../css/x/xixtq5bii.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="ayejp5iod"/><path class="ecuga9b_u"/><path class="xixtq5bii"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:3d-select-face"} {...others} />);
}

export default Component;
