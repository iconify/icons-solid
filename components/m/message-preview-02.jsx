import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vqxrdfoxw.css';
import '../../css/i/im8zz_bce.css';
import '../../css/e/e958cac3b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vqxrdfoxw"/><path class="im8zz_bce"/><path class="e958cac3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-preview-02"} {...others} />);
}

export default Component;
