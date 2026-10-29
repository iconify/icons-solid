import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/em-dy2t7x.css';
import '../../css/b/b-17occjh.css';
import '../../css/b/bkprrvblz.css';
import '../../css/k/kq4anp9be.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="em-dy2t7x"/><path class="b-17occjh wm-a"/><path class="bkprrvblz wm-k"/><path class="kq4anp9be wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:globe-sketch"} {...others} />);
}

export default Component;
