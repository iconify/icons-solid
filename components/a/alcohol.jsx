import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ub_o4lqpw.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="ub_o4lqpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:alcohol"} {...others} />);
}

export default Component;
