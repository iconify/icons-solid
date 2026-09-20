import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/v/vwbxesc0s.css';
import '../../css/a/arerwqhwf.css';
import '../../css/c/c992g34tk.css';
import '../../css/b/beq7crb5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="vwbxesc0s"/><path class="arerwqhwf"/><path class="c992g34tk"/><path class="beq7crb5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:empty-recycle-bin-1"} {...others} />);
}

export default Component;
