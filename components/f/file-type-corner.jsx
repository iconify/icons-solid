import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z5s73brul.css';
import '../../css/v/v4u1pfbdo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="z5s73brul"/><path class="v4u1pfbdo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-type-corner"} {...others} />);
}

export default Component;
