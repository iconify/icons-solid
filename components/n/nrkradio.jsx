import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwd6vqffv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fwd6vqffv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:nrkradio"} {...others} />);
}

export default Component;
