import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gsvbu8byk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gsvbu8byk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-message-rounded-check"} {...others} />);
}

export default Component;
