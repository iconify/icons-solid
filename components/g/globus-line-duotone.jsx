import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xid9gtrns.css';
import '../../css/c/cax_t5mes.css';
import '../../css/i/ihd0-dkdb.css';
import '../../css/w/wphjg4btj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xid9gtrns"/><path class="cax_t5mes"/><path class="ihd0-dkdb"/><path class="wphjg4btj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:globus-line-duotone"} {...others} />);
}

export default Component;
