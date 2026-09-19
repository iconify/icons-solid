import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwcanry2a.css';
import '../../css/c/c98at3bul.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bwcanry2a"/><path class="c98at3bul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:caret-left-square"} {...others} />);
}

export default Component;
