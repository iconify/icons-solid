import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mjd-hzkul.css';
import '../../css/y/y3p4a8bgr.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="nrj6p8qat"><path class="mjd-hzkul"/><circle class="y3p4a8bgr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bytesize:lock"} {...others} />);
}

export default Component;
