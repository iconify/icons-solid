import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sfev94bnu.css';
import '../../css/c/clnx42b7s.css';
import '../../css/n/nylzg1e3n.css';
import '../../css/q/qjbrr-btl.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sfev94bnu"/><path class="clnx42b7s"/><path class="nylzg1e3n"/><path class="qjbrr-btl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:accounting-calculator"} {...others} />);
}

export default Component;
