import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9r3zqm1y.css';
import '../../css/t/tqpeaibww.css';
import '../../css/h/h_fsqebiz.css';
import '../../css/e/e85mzqbit.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m9r3zqm1y wm-k"/><path class="tqpeaibww wm-k"/><path class="h_fsqebiz wm-a"/><circle class="e85mzqbit wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:door-open"} {...others} />);
}

export default Component;
