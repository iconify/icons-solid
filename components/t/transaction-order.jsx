import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/w/wo-qoib4x.css';
import '../../css/w/wyln_uqtp.css';
import '../../css/z/zp28qpbit.css';
import '../../css/s/sknxh3b7i.css';
import '../../css/g/gwt135bcc.css';
import '../../css/a/apmtijbox.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><rect class="wo-qoib4x"/><path class="wyln_uqtp"/><path class="zp28qpbit"/><path class="sknxh3b7i"/><path class="gwt135bcc"/><path class="apmtijbox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:transaction-order"} {...others} />);
}

export default Component;
