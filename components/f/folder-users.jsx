import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jjnkqvb4m.css';
import '../../css/j/jv30wsq6n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jjnkqvb4m"/><path class="jv30wsq6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:folder-users"} {...others} />);
}

export default Component;
