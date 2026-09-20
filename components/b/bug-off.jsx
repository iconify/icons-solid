import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/ciy9r72nx.css';
import '../../css/w/wff0vobek.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ciy9r72nx"/><path class="wff0vobek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:bug-off"} {...others} />);
}

export default Component;
