import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h77mg_bfz.css';
import '../../css/h/h4gz_jbet.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h77mg_bfz"/><path class="h4gz_jbet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:messages-bubble-disable-bold"} {...others} />);
}

export default Component;
