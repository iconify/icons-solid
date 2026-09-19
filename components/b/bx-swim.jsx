import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_9wi13wp.css';
import '../../css/j/jinb2jzjf.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="l_9wi13wp"/><path class="jinb2jzjf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-swim"} {...others} />);
}

export default Component;
