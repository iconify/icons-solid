import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/l/litqne4ib.css';
import '../../css/j/jjtqylbsz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="litqne4ib"/><path class="jjtqylbsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:hierarchy-16"} {...others} />);
}

export default Component;
