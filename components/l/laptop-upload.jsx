import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cl-cxlwbu.css';
import '../../css/s/ssn21-aor.css';
import '../../css/w/wkqjalm6n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cl-cxlwbu"/><path class="ssn21-aor"/><path class="wkqjalm6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:laptop-upload"} {...others} />);
}

export default Component;
