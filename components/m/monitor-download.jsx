import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eibi9p29r.css';
import '../../css/x/xwpmugzol.css';
import '../../css/m/m4e1nbbvn.css';
import '../../css/i/ixqo_wb7f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="eibi9p29r"/><path class="xwpmugzol"/><path class="m4e1nbbvn"/><path class="ixqo_wb7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:monitor-download"} {...others} />);
}

export default Component;
