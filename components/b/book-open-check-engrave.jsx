import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dwuaxabbb.css';
import '../../css/p/pk03-9beu.css';
import '../../css/z/z_02kkxdd.css';
import '../../css/u/uh6a78blk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="dwuaxabbb wm-k"/><path class="pk03-9beu wm-shadow"/><path class="wm-k z_02kkxdd"/><path class="uh6a78blk wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:book-open-check-engrave"} {...others} />);
}

export default Component;
