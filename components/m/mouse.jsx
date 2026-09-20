import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x0cowp4_c.css';
import '../../css/e/e9iz66b6n.css';
import '../../css/v/vqsc5ck3r.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="x0cowp4_c"/><path class="e9iz66b6n"/><path class="vqsc5ck3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:mouse"} {...others} />);
}

export default Component;
