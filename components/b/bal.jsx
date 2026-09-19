import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/amzs62l_r.css';
import '../../css/m/md286fbip.css';
import '../../css/p/pthgwib3v.css';
import '../../css/n/nodvywbpm.css';
import '../../css/j/jblli5bgd.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="amzs62l_r"/><g class="md286fbip"><path class="pthgwib3v"/><path class="nodvywbpm"/><path class="jblli5bgd"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:bal"} {...others} />);
}

export default Component;
