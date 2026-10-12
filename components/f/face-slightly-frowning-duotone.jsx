import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u94jira_c.css';
import '../../css/g/g4vvtk_cw.css';
import '../../css/g/gx35_lbkf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u94jira_c"/><path class="g4vvtk_cw"/><path class="gx35_lbkf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:face-slightly-frowning-duotone"} {...others} />);
}

export default Component;
