import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/okex9absk.css';
import '../../css/c/c6t4b7bfi.css';
import '../../css/v/vwzncsbmf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="okex9absk"/><path class="c6t4b7bfi wm-shadow"/><path class="vwzncsbmf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:panel-right-engrave"} {...others} />);
}

export default Component;
