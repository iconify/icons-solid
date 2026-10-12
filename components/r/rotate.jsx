import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xwww_0gyb.css';
import '../../css/l/l5kwd3b8v.css';
import '../../css/r/r4s87stbt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xwww_0gyb"/><path class="l5kwd3b8v"/><path class="r4s87stbt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:rotate"} {...others} />);
}

export default Component;
