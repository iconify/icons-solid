import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sortblb2j.css';
import '../../css/w/w-5rgdbpk.css';
import '../../css/a/avwj5pu0c.css';
import '../../css/j/j74ghonra.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="sortblb2j wm-k"/><path class="w-5rgdbpk wm-a"/><path class="avwj5pu0c wm-k"/><path class="j74ghonra wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:case-upper-sketch"} {...others} />);
}

export default Component;
