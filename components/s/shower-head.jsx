import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mww64c6yu.css';
import '../../css/h/hqrzb4bbz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mww64c6yu"/><path class="hqrzb4bbz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:shower-head"} {...others} />);
}

export default Component;
