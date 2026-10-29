import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fzlgrtb8q.css';
import '../../css/a/a5_vm_89c.css';
import '../../css/o/oi-opqu9k.css';
import '../../css/w/wq38gndli.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="fzlgrtb8q"/><path class="a5_vm_89c wm-shadow"/><path class="oi-opqu9k"/><path class="wq38gndli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:kalash-engrave"} {...others} />);
}

export default Component;
