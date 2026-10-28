import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/myj-5sbyn.css';
import '../../css/a/a7y3gs5qm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="myj-5sbyn"/><path class="a7y3gs5qm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:box"} {...others} />);
}

export default Component;
