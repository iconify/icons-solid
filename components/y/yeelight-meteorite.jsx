import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qj2nb0bor.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qj2nb0bor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:yeelight-meteorite"} {...others} />);
}

export default Component;
