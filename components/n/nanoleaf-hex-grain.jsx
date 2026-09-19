import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nkkp8_bwt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nkkp8_bwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:nanoleaf-hex-grain"} {...others} />);
}

export default Component;
