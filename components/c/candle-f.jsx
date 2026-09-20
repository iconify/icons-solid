import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsib2p_mh.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-1};
const content = `<path class="dsib2p_mh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:candle-f"} {...others} />);
}

export default Component;
