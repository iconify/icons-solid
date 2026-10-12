import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yn436cvro.css';
import '../../css/d/d3bf4tbhb.css';
import '../../css/y/yk7yzghcz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yn436cvro"/><path class="d3bf4tbhb"/><path class="yk7yzghcz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-scan"} {...others} />);
}

export default Component;
