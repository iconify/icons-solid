import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ld6q39zjy.css';
import '../../css/g/g2kfimbmv.css';
import '../../css/j/j_-fncawe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ld6q39zjy"/><path class="g2kfimbmv"/><path class="j_-fncawe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-ai"} {...others} />);
}

export default Component;
