import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/saih6fxnq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="saih6fxnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:dartboard"} {...others} />);
}

export default Component;
