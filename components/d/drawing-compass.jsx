import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sm58dfblq.css';
import '../../css/z/z2o0ujiuj.css';
import '../../css/q/qdv9qd58a.css';
import '../../css/d/d330q5myy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="sm58dfblq"/><circle class="z2o0ujiuj"/><path class="qdv9qd58a"/><path class="d330q5myy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:drawing-compass"} {...others} />);
}

export default Component;
