import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jq7m4_bez.css';
import '../../css/m/mxlpzmyqt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jq7m4_bez"/><path class="mxlpzmyqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:virtual-reality-outlined"} {...others} />);
}

export default Component;
