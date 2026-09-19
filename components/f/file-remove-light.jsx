import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/th5uzgbxt.css';
import '../../css/d/dcnuadlyf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="th5uzgbxt"/><path class="dcnuadlyf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:file-remove-light"} {...others} />);
}

export default Component;
