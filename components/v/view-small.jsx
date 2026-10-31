import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bv9-wdmwu.css';
import '../../css/e/ejssn1b7l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="bv9-wdmwu"/><path class="ejssn1b7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:view-small"} {...others} />);
}

export default Component;
