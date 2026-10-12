import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hf57vxb7w.css';
import '../../css/w/wy9-3fben.css';
import '../../css/l/lgqjfkjbs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hf57vxb7w"/><path class="wy9-3fben"/><path class="lgqjfkjbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-measure"} {...others} />);
}

export default Component;
