import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nf-dlbakk.css';
import '../../css/l/l_7c63odl.css';
import '../../css/s/srjf_ccfe.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nf-dlbakk"/><path class="l_7c63odl"/><path clip-rule="evenodd" class="srjf_ccfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:mail-send-solid"} {...others} />);
}

export default Component;
