import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mnx9fobfp.css';
import '../../css/v/vmlbzhbsz.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="ft5dv1b6b"><path class="mnx9fobfp"/><path class="vmlbzhbsz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:neo4j-wordmark"} {...others} />);
}

export default Component;
