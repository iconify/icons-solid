import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/p/pjnz5pb2v.css';
import '../../css/j/jzx2riukm.css';
import '../../css/p/psbtyf_5v.css';
import '../../css/z/zc1chmbgn.css';
import '../../css/o/o8dg_946j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="pjnz5pb2v"/><path class="jzx2riukm"/><path class="psbtyf_5v"/><path class="zc1chmbgn"/><path class="o8dg_946j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:askfm-logo"} {...others} />);
}

export default Component;
