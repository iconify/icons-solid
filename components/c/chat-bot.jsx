import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glp2bkbii.css';
import '../../css/m/mynrssntn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="glp2bkbii"/><path class="mynrssntn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:chat-bot"} {...others} />);
}

export default Component;
