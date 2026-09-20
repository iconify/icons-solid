import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uykdrio-p.css';
import '../../css/f/f44stdb-u.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/m/mehba9vbc.css';
import '../../css/i/ir-4gvm9i.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="uykdrio-p"/><path class="f44stdb-u"/><g class="brzn_0bpr"><path class="mehba9vbc"/><path class="ir-4gvm9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:square-with-upper-left-diagonal-black"} {...others} />);
}

export default Component;
