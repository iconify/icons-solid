import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wt7fksspz.css';
import '../../css/x/xw5kczn2n.css';
import '../../css/h/hee4znb9f.css';
import '../../css/l/lq3_85bzj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wt7fksspz"/><path class="xw5kczn2n"/><path class="hee4znb9f"/><path class="lq3_85bzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-history"} {...others} />);
}

export default Component;
