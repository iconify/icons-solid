import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bo7bp7bqb.css';
import '../../css/g/gzlm1jb-p.css';
import '../../css/q/qe99iznek.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bo7bp7bqb"/><path class="gzlm1jb-p"/><path class="qe99iznek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:stethoscope"} {...others} />);
}

export default Component;
