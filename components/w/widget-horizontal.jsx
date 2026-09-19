import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3t9q1bdx.css';
import '../../css/c/c_jeolnlq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y3t9q1bdx"/><path class="c_jeolnlq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:widget-horizontal"} {...others} />);
}

export default Component;
