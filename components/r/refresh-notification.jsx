import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cxbg8gruc.css';
import '../../css/g/gb_1nlvhf.css';
import '../../css/u/uc7yrbuem.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cxbg8gruc"/><path class="gb_1nlvhf"/><path class="uc7yrbuem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:refresh-notification"} {...others} />);
}

export default Component;
