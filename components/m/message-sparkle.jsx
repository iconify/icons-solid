import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ujp1u7bgy.css';
import '../../css/f/fv3l_rq4r.css';
import '../../css/v/vi8q8acob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ujp1u7bgy"/><path class="fv3l_rq4r"/><path class="vi8q8acob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:message-sparkle"} {...others} />);
}

export default Component;
