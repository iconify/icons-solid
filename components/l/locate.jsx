import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v6f3rhfdf.css';
import '../../css/f/f_362pbxn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v6f3rhfdf"/><circle class="f_362pbxn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:locate"} {...others} />);
}

export default Component;
