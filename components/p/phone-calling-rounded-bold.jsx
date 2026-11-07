import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cquf3bccv.css';
import '../../css/q/qv0degibz.css';
import '../../css/j/jcweppbdj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cquf3bccv"/><path class="qv0degibz"/><path class="jcweppbdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:phone-calling-rounded-bold"} {...others} />);
}

export default Component;
