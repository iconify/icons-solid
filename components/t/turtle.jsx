import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h7f1-hqsw.css';
import '../../css/m/me4ih5egx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h7f1-hqsw"/><path class="me4ih5egx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:turtle"} {...others} />);
}

export default Component;
