import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u67375bcw.css';
import '../../css/d/di5qp9b3x.css';
import '../../css/x/xhob3ybob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="u67375bcw"/><path class="di5qp9b3x"/><path class="xhob3ybob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:picture-double-landscape"} {...others} />);
}

export default Component;
