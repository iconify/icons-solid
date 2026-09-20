import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpd8tnbks.css';
import '../../css/y/yzp5midtp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lpd8tnbks"/><path class="yzp5midtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:comment-quote"} {...others} />);
}

export default Component;
