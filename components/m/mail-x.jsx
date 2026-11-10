import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/duih4jb0l.css';
import '../../css/y/y1ap_cude.css';
import '../../css/a/a0k2vdbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="duih4jb0l"/><path class="y1ap_cude"/><path class="a0k2vdbvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-x"} {...others} />);
}

export default Component;
