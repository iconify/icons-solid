import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p-ergccey.css';
import '../../css/k/kr41us1ha.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p-ergccey"/><path class="kr41us1ha"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:file-terminal"} {...others} />);
}

export default Component;
