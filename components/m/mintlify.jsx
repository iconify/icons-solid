import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rsgvqsbiw.css';
import '../../css/n/no17qlb2l.css';

const viewBox = {"width":19,"height":19};
const content = `<g class="ft5dv1b6b"><path class="rsgvqsbiw"/><path class="no17qlb2l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mintlify"} {...others} />);
}

export default Component;
