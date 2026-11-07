import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvvgatbpq.css';
import '../../css/x/xgwd3dwqp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tvvgatbpq"/><path class="xgwd3dwqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:maximize-bold"} {...others} />);
}

export default Component;
