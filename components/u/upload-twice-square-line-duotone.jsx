import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wi3cvkb9x.css';
import '../../css/b/b__-pabng.css';
import '../../css/i/ieyk-1btb.css';
import '../../css/w/wf89k6buf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wi3cvkb9x"/><path class="b__-pabng"/><path class="ieyk-1btb"/><path class="wf89k6buf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:upload-twice-square-line-duotone"} {...others} />);
}

export default Component;
