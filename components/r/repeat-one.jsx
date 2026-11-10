import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fugu89b4v.css';
import '../../css/p/p2n92d6cl.css';
import '../../css/t/tatnkhskm.css';
import '../../css/h/hfss7-f3b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fugu89b4v"/><path class="p2n92d6cl"/><path class="tatnkhskm"/><path class="hfss7-f3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:repeat-one"} {...others} />);
}

export default Component;
