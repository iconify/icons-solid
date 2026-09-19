import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xx2cbsiiy.css';
import '../../css/u/us9oalb-g.css';
import '../../css/n/n2o677b8q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xx2cbsiiy"/><path class="us9oalb-g"/><path class="n2o677b8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:router"} {...others} />);
}

export default Component;
