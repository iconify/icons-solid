import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/krq-zbi2p.css';
import '../../css/n/ngpo85bro.css';
import '../../css/x/xo0o4nf2y.css';
import '../../css/j/jkyfccbdj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="krq-zbi2p"/><circle class="ngpo85bro"/><path class="xo0o4nf2y"/><path class="jkyfccbdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:refresh-plus"} {...others} />);
}

export default Component;
