import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ecsrbub4u.css';
import '../../css/m/mnlk1ccyj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ecsrbub4u"/><path class="mnlk1ccyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:chart-bar"} {...others} />);
}

export default Component;
