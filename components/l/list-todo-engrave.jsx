import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zkftu-bdd.css';
import '../../css/l/ln-u4tuvh.css';
import '../../css/c/cm25f5b_t.css';
import '../../css/b/b2_xccbks.css';
import '../../css/f/fyx95nbgx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k zkftu-bdd"/><path class="ln-u4tuvh wm-a"/><path class="cm25f5b_t wm-shadow"/><path class="b2_xccbks wm-k"/><path class="fyx95nbgx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:list-todo-engrave"} {...others} />);
}

export default Component;
