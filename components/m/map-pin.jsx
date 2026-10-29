import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x5lhjabzt.css';
import '../../css/j/jp6r2woqe.css';
import '../../css/j/j92kwya6t.css';
import '../../css/w/wu30lb78k.css';
import '../../css/s/scbhvg3qq.css';
import '../../css/b/btioxqc-z.css';
import '../../css/k/ki-bsy2cy.css';
import '../../css/p/pcn24ebuf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow x5lhjabzt"/><path class="jp6r2woqe wm-k"/><path class="j92kwya6t wm-k"/><path class="wm-k wu30lb78k"/><path class="scbhvg3qq wm-shine"/><path class="btioxqc-z wm-a"/><path class="ki-bsy2cy wm-a"/><path class="pcn24ebuf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:map-pin"} {...others} />);
}

export default Component;
