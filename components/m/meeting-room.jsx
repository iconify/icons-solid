import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tq-ey0bqp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tq-ey0bqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:meeting-room"} {...others} />);
}

export default Component;
