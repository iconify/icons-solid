import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/t/th5uzgbxt.css';
import '../../css/d/dcnuadlyf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="th5uzgbxt"/><path class="dcnuadlyf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:file-remove-thin"} {...others} />);
}

export default Component;
