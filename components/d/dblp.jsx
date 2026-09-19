import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwz6_x2lb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mwz6_x2lb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:dblp"} {...others} />);
}

export default Component;
