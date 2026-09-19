import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/r/rdepw29ic.css';
import '../../css/d/ds9nz3qrr.css';
import '../../css/x/xj9-7bcyf.css';
import '../../css/j/jmjztjsms.css';
import '../../css/f/fr-tfmb9b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="rdepw29ic"/><circle class="ds9nz3qrr"/><path class="xj9-7bcyf"/><path class="jmjztjsms"/><path class="fr-tfmb9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:history-query"} {...others} />);
}

export default Component;
