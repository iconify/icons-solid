import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bjnfksb2c.css';
import '../../css/i/idh70tbsk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bjnfksb2c"/><path class="idh70tbsk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:eye-off"} {...others} />);
}

export default Component;
