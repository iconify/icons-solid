import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxftmab1w.css';
import '../../css/n/n8m_h_bkm.css';
import '../../css/c/cum1b9uvw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fxftmab1w"/><circle class="n8m_h_bkm"/><path class="cum1b9uvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:pod-security-outlined"} {...others} />);
}

export default Component;
