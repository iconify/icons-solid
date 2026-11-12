import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8db5jj_i.css';
import '../../css/s/sw929ezvp.css';
import '../../css/n/n1v3c_bsy.css';
import '../../css/c/crbo13bgz.css';
import '../../css/v/vtzwnx26t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t8db5jj_i"/><path class="sw929ezvp"/><path class="n1v3c_bsy"/><path class="crbo13bgz"/><path class="vtzwnx26t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nps-enhanced-dark"} {...others} />);
}

export default Component;
