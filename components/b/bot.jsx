import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xyv8pkb4v.css';
import '../../css/c/cegclvbyt.css';
import '../../css/z/zlay3tj2k.css';
import '../../css/h/hmqivzpnt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xyv8pkb4v"/><ellipse class="cegclvbyt"/><ellipse class="zlay3tj2k"/><path class="hmqivzpnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bot"} {...others} />);
}

export default Component;
