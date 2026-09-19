import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vy9s2_bga.css';

const viewBox = {"width":768,"height":1024};
const content = `<path class="vy9s2_bga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:brailleseven"} {...others} />);
}

export default Component;
