import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b133qtshg.css';
import '../../css/j/jbgenzzof.css';
import '../../css/w/wi7o0k21l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b133qtshg"/><path class="jbgenzzof"/><path class="wi7o0k21l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:inbox-unread-bold"} {...others} />);
}

export default Component;
