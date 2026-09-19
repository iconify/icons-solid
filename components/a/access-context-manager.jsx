import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rwd8asbpl.css';
import '../../css/q/q-2jfmgll.css';
import '../../css/i/ihmczr5tw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="rwd8asbpl"/><path class="q-2jfmgll"/><path class="ihmczr5tw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:access-context-manager"} {...others} />);
}

export default Component;
