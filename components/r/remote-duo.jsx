import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cy_68i1xc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wlrfrla8c.css';
import '../../css/z/z_rsq7q-q.css';
import '../../css/k/k8r60b5kl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cy_68i1xc secondary"/><g class="dt0cm9dhy primary"><path class="wlrfrla8c"/><path class="z_rsq7q-q"/><path class="k8r60b5kl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:remote-duo"} {...others} />);
}

export default Component;
