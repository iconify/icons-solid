import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sgxln0b_c.css';
import '../../css/h/hlm14cb_n.css';
import '../../css/h/h-clu1byv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sgxln0b_c"/><path class="hlm14cb_n"/><path class="h-clu1byv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:frm"} {...others} />);
}

export default Component;
