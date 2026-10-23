import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o6d6x_egj.css';
import '../../css/q/qhj34pf_f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o6d6x_egj"/><path class="qhj34pf_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:folder-output"} {...others} />);
}

export default Component;
