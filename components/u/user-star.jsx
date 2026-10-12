import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_-gkxb7l.css';
import '../../css/i/i_hbnmb4b.css';
import '../../css/x/xqeh_feut.css';
import '../../css/x/x9g6iubus.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b_-gkxb7l"/><path class="i_hbnmb4b"/><path class="xqeh_feut"/><path class="x9g6iubus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user-star"} {...others} />);
}

export default Component;
