import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vuzid9bqa.css';
import '../../css/p/pw9ehkiqw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vuzid9bqa"/><path class="pw9ehkiqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:upload-cloud"} {...others} />);
}

export default Component;
