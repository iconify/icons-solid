import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/s/s30a-_b1r.css';
import '../../css/b/bxi8veauq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="s30a-_b1r"/><path class="bxi8veauq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:flip-vertical-square-1"} {...others} />);
}

export default Component;
