import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3kb4cgpl.css';
import '../../css/t/th5uzgbxt.css';
import '../../css/d/dcnuadlyf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="r3kb4cgpl"><path class="th5uzgbxt"/><path class="dcnuadlyf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:file-remove-bold"} {...others} />);
}

export default Component;
