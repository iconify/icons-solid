import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rcv2l6t1d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rcv2l6t1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:uhd"} {...others} />);
}

export default Component;
