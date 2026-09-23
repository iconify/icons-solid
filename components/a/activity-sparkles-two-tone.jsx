import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/chpjlr67g.css';
import '../../css/s/s2-fsy12s.css';
import '../../css/o/osw1wxbaf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="chpjlr67g"/><path class="s2-fsy12s"/><path class="osw1wxbaf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:activity-sparkles-two-tone"} {...others} />);
}

export default Component;
