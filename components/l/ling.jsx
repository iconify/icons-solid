import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q7wz0pbpw.css';
import '../../css/k/kbeh0tbto.css';
import '../../css/c/cn04bccyn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q7wz0pbpw"/><path class="kbeh0tbto"/><path class="cn04bccyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ling"} {...others} />);
}

export default Component;
