import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/p/pvf7tv9ss.css';
import '../../css/g/gcz0v_n4i.css';
import '../../css/s/shi8u7lan.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/j/jgtis7b9v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="pvf7tv9ss"/><path class="gcz0v_n4i wm-shine"/><path class="shi8u7lan wm-k"/><path class="qr4ochb5c wm-s"/><path class="jgtis7b9v wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:cloud-off"} {...others} />);
}

export default Component;
