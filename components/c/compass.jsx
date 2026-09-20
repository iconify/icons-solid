import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hsawhh26k.css';
import '../../css/u/uuqt_yb-q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hsawhh26k"/><path class="uuqt_yb-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:compass"} {...others} />);
}

export default Component;
