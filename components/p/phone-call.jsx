import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wu3ku-bpd.css';
import '../../css/p/pegestb2p.css';
import '../../css/b/biczcvbdd.css';
import '../../css/f/fsmo9ybwb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wu3ku-bpd"/><path class="pegestb2p"/><path class="biczcvbdd"/><path class="fsmo9ybwb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:phone-call"} {...others} />);
}

export default Component;
