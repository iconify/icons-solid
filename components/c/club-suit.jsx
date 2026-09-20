import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xq_xn5bxe.css';
import '../../css/s/snp287xku.css';
import '../../css/o/obr8ke7yg.css';
import '../../css/h/h_tc_qcyt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xq_xn5bxe"/><path class="snp287xku"/><path class="obr8ke7yg"/><path class="h_tc_qcyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:club-suit"} {...others} />);
}

export default Component;
