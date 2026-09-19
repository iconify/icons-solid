import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gej5qbeik.css';
import '../../css/w/w76yeublj.css';
import '../../css/z/zxu7hye5x.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="gej5qbeik"><path class="w76yeublj"/><path class="zxu7hye5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:adobe-xd"} {...others} />);
}

export default Component;
