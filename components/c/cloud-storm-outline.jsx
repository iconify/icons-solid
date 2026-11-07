import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ph-lyk__x.css';
import '../../css/y/ybkhrgori.css';
import '../../css/n/n_7s633jr.css';
import '../../css/o/onh9oyipx.css';
import '../../css/m/mgjb77b4m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ph-lyk__x"/><path class="ybkhrgori"/><path class="n_7s633jr"/><path class="onh9oyipx"/><path class="mgjb77b4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-storm-outline"} {...others} />);
}

export default Component;
