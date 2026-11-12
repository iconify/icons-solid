import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/di4sswb8c.css';
import '../../css/i/igyalw_4q.css';
import '../../css/x/x7ghx-psb.css';
import '../../css/k/k_26gp1en.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="di4sswb8c"/><path class="igyalw_4q"/><path class="x7ghx-psb"/><path class="k_26gp1en"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:transfer-zip-light"} {...others} />);
}

export default Component;
