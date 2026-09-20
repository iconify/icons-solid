import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/z/zwuy_7brd.css';
import '../../css/p/pa9qlj9ki.css';
import '../../css/v/v69mdge2a.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="h01tyzbfu"><path class="zwuy_7brd"/><path class="pa9qlj9ki"/><path class="v69mdge2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:popcorn"} {...others} />);
}

export default Component;
