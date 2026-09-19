import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vd-_2wbux.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vd-_2wbux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:ha-voice-pe"} {...others} />);
}

export default Component;
