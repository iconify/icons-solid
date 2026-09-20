import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t_69hpuni.css';
import '../../css/r/rw7mf9_-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t_69hpuni"/><path class="rw7mf9_-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-edit"} {...others} />);
}

export default Component;
