import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlv0u0bzu.css';
import '../../css/w/wyuz1vbhu.css';
import '../../css/y/ynjpy6sjz.css';
import '../../css/m/mil8c4_7q.css';
import '../../css/o/oiypdpdrq.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="vlv0u0bzu"/><path class="wyuz1vbhu"/><path class="ynjpy6sjz"/><path class="mil8c4_7q"/><path class="oiypdpdrq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:reconciliation-twotone"} {...others} />);
}

export default Component;
