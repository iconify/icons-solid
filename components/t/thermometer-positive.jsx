import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/c/ciaqjn8ce.css';
import '../../css/c/c53bwmbsn.css';
import '../../css/x/xvr8s7biw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="ciaqjn8ce"/><path class="c53bwmbsn"/><path class="xvr8s7biw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:thermometer-positive"} {...others} />);
}

export default Component;
