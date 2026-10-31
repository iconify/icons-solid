import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cqibqf0me.css';
import '../../css/l/lgsls3qrz.css';
import '../../css/g/gnfde-odv.css';
import '../../css/z/z4fzfc_1c.css';
import '../../css/g/gimw_kpih.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="cqibqf0me wm-shadow"/><path class="lgsls3qrz wm-shadow"/><path class="gnfde-odv"/><path class="z4fzfc_1c"/><path class="gimw_kpih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:banknote"} {...others} />);
}

export default Component;
