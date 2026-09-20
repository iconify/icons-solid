import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g8iv-vt_n.css';
import '../../css/a/af28vybxi.css';
import '../../css/b/b2cdmq-zg.css';
import '../../css/j/jic0osb1g.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="g8iv-vt_n"/><path clip-rule="evenodd" class="af28vybxi"/><path class="b2cdmq-zg"/><path class="jic0osb1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:hotel-air-conditioner"} {...others} />);
}

export default Component;
