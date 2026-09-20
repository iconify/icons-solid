import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4v2btb9e.css';
import '../../css/y/ykliw_bta.css';
import '../../css/o/ozeko6bkf.css';
import '../../css/s/szx5y9bfq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t4v2btb9e"/><circle class="ykliw_bta"/><circle class="ozeko6bkf"/><circle class="szx5y9bfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:palette-ltr"} {...others} />);
}

export default Component;
