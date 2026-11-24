import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g61trzimo.css';
import '../../css/u/u0m-i_fxn.css';
import '../../css/k/k6ug5mbpr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g61trzimo"/><path class="u0m-i_fxn"/><path class="k6ug5mbpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-code-corner-filled"} {...others} />);
}

export default Component;
