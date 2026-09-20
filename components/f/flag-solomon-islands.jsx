import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wism3vaym.css';
import '../../css/a/a8zg1pdpv.css';
import '../../css/b/b80t6qbns.css';
import '../../css/m/m50idfmqp.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wism3vaym"/><path class="a8zg1pdpv"/><path class="b80t6qbns"/><path class="m50idfmqp"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-solomon-islands"} {...others} />);
}

export default Component;
