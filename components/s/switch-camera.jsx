import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nihi_xxwd.css';
import '../../css/z/z6z3e6b6x.css';
import '../../css/j/jtc854xbu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nihi_xxwd"/><path class="z6z3e6b6x"/><path class="jtc854xbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:switch-camera"} {...others} />);
}

export default Component;
