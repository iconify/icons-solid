import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g9698s6ed.css';
import '../../css/f/f_362pbxn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g9698s6ed"/><circle class="f_362pbxn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:virus"} {...others} />);
}

export default Component;
