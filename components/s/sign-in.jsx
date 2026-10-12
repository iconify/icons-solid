import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xwyczob2v.css';
import '../../css/f/fk9x8xbji.css';
import '../../css/r/rryq7zaqo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xwyczob2v"/><path class="fk9x8xbji"/><path class="rryq7zaqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sign-in"} {...others} />);
}

export default Component;
