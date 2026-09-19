import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jf-3mxbdo.css';
import '../../css/e/enhfi_bcu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jf-3mxbdo"/><path class="enhfi_bcu"><animateTransform attributeName="transform" dur="1s" from="0 12 12" repeatCount="indefinite" to="360 12 12" type="rotate"/></path>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:loading"} {...others} />);
}

export default Component;
