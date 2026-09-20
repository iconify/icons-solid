import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fsp--cbzq.css';

const viewBox = {"width":24,"height":24,"left":-8,"top":-7};
const content = `<path class="fsp--cbzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:header"} {...others} />);
}

export default Component;
