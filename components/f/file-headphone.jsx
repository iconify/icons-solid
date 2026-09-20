import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rnxn9db_o.css';
import '../../css/f/fq0mcjbxr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rnxn9db_o"/><path class="fq0mcjbxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-headphone"} {...others} />);
}

export default Component;
