import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zfcqqsmiv.css';
import '../../css/r/ryf4c_b7f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zfcqqsmiv"/><path class="ryf4c_b7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:nebo"} {...others} />);
}

export default Component;
