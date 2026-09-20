import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r-wdw9y_q.css';
import '../../css/a/adlrp5blf.css';
import '../../css/n/nw_2sy6tn.css';
import '../../css/o/oq2q9gbdb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r-wdw9y_q"/><path class="adlrp5blf"/><path class="nw_2sy6tn"/><path class="oq2q9gbdb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:bank-note-1"} {...others} />);
}

export default Component;
