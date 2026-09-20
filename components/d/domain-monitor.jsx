import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i12qm0bek.css';
import '../../css/n/n8njst_bx.css';
import '../../css/n/nkqt--bvr.css';
import '../../css/t/tbwsaot4u.css';
import '../../css/j/jzplx04wq.css';
import '../../css/e/e6lz-buqx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="i12qm0bek"/><path class="n8njst_bx"/><circle class="nkqt--bvr"/><path class="tbwsaot4u"/><path class="jzplx04wq"/><path class="e6lz-buqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:domain-monitor"} {...others} />);
}

export default Component;
