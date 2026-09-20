import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m38zlzbtp.css';
import '../../css/i/iv4nqz7tn.css';
import '../../css/f/f6g8zlbat.css';

const viewBox = {"width":24,"height":24};
const content = `<g transform="translate(-.009 -.001)scale(.12121)"><circle class="m38zlzbtp"/><path class="iv4nqz7tn"/><path class="f6g8zlbat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:wolframlanguage"} {...others} />);
}

export default Component;
