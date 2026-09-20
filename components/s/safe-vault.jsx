import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/wun1xkzpo.css';
import '../../css/y/yx1papx9s.css';
import '../../css/h/hhxymfb2h.css';
import '../../css/h/h-sr9mjsl.css';
import '../../css/k/ktsp6zwrc.css';
import '../../css/q/q-qf9i-un.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="wun1xkzpo"/><path class="yx1papx9s"/><path class="hhxymfb2h"/><path class="h-sr9mjsl"/><path class="ktsp6zwrc"/><path class="q-qf9i-un"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:safe-vault"} {...others} />);
}

export default Component;
