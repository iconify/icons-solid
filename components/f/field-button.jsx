import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ypq1_laab.css';
import '../../css/l/lv20mzbkr.css';
import '../../css/c/cwzzs50qu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 18.76 19.12)" class="ypq1_laab"/><rect transform="matrix(0 -1 -1 0 18.76 19.12)" class="lv20mzbkr"/><path class="cwzzs50qu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:field-button"} {...others} />);
}

export default Component;
