import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iruu2iqcc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iruu2iqcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:call-incoming-filled"} {...others} />);
}

export default Component;
