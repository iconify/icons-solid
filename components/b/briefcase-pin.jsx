import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v1tex0gdj.css';
import '../../css/m/m9z8vhbxc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v1tex0gdj"/><path class="m9z8vhbxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:briefcase-pin"} {...others} />);
}

export default Component;
