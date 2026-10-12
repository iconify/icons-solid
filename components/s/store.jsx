import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iypovc5ux.css';
import '../../css/f/f75su9_fr.css';
import '../../css/s/sc6wphleq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iypovc5ux"/><path class="f75su9_fr"/><path class="sc6wphleq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:store"} {...others} />);
}

export default Component;
