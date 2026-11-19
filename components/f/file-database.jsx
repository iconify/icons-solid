import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gxn7e_r0q.css';
import '../../css/v/vhcx94exb.css';
import '../../css/t/tcsio-2nj.css';
import '../../css/r/rxdqxpb3g.css';
import '../../css/i/ize715bzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gxn7e_r0q"/><path class="vhcx94exb"/><path class="tcsio-2nj"/><ellipse class="rxdqxpb3g"/><path class="ize715bzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-database"} {...others} />);
}

export default Component;
