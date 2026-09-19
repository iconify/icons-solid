import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/snfofybnw.css';
import '../../css/b/bxmkebcbg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="snfofybnw"/><path class="bxmkebcbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:message-alt-minus"} {...others} />);
}

export default Component;
