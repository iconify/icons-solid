import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ymqjz_bnr.css';
import '../../css/n/npzbi206w.css';
import '../../css/w/wi9yd9xbj.css';
import '../../css/y/yy6ho-b5r.css';
import '../../css/k/kf18auhfa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ymqjz_bnr"/><circle class="npzbi206w"/><path class="wi9yd9xbj"/><path class="yy6ho-b5r"/><path class="kf18auhfa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:faucet"} {...others} />);
}

export default Component;
