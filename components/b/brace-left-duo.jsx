import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lsw-kbb8z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lsw-kbb8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:brace-left-duo"} {...others} />);
}

export default Component;
