import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/oa29y7bly.css';
import '../../css/a/a1wq3abcj.css';
import '../../css/m/m_g4t8b0d.css';
import '../../css/q/qb8r96btl.css';
import '../../css/o/o54qorbnl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="oa29y7bly wm-k"/><path class="a1wq3abcj wm-a"/><path class="m_g4t8b0d wm-shadow"/><path class="qb8r96btl wm-k"/><path class="o54qorbnl wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:list-checks-engrave"} {...others} />);
}

export default Component;
