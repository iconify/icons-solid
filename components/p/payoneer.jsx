import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txfwdmb_e.css';
import '../../css/s/slra1_f-x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="txfwdmb_e"/><path clip-rule="evenodd" class="slra1_f-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:payoneer"} {...others} />);
}

export default Component;
