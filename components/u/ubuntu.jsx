import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfvl_quvy.css';
import '../../css/x/xwnqe-beb.css';
import '../../css/u/u4z7rnb1i.css';
import '../../css/c/clgcxl7va.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xfvl_quvy"/><path clip-rule="evenodd" class="xwnqe-beb"/><path class="u4z7rnb1i"/><path class="clgcxl7va"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:ubuntu"} {...others} />);
}

export default Component;
