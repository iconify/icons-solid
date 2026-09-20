import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8_l-ut3t.css';
import '../../css/t/tr97occks.css';
import '../../css/w/wwejqjbiz.css';
import '../../css/q/qfzucz_7n.css';
import '../../css/i/i_tivbljh.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="t8_l-ut3t"/><circle class="tr97occks"/><path class="wwejqjbiz"/><circle class="qfzucz_7n"/><circle class="i_tivbljh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pulse"} {...others} />);
}

export default Component;
