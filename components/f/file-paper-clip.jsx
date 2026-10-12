import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pcipawbmd.css';
import '../../css/j/jwwcu_u6l.css';
import '../../css/e/ec1nrbb9q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pcipawbmd"/><path class="jwwcu_u6l"/><path class="ec1nrbb9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-paper-clip"} {...others} />);
}

export default Component;
