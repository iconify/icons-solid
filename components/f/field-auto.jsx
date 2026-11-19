import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bwt341hlt.css';
import '../../css/y/yrvp4ab5k.css';
import '../../css/u/upq6qbcls.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bwt341hlt"/><path class="yrvp4ab5k"/><path class="upq6qbcls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:field-auto"} {...others} />);
}

export default Component;
