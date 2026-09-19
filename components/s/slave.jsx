import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/trh37ib-k.css';
import '../../css/t/t79uieb2k.css';
import '../../css/t/tn0uqua-i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="trh37ib-k"/><path class="t79uieb2k"/><circle class="tn0uqua-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:slave"} {...others} />);
}

export default Component;
