import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qrzqppb6h.css';
import '../../css/j/jlv_n8f1c.css';
import '../../css/i/io7hwf6xz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qrzqppb6h"/><path class="jlv_n8f1c"/><path class="io7hwf6xz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-code"} {...others} />);
}

export default Component;
