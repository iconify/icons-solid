import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7wfo1l2j.css';
import '../../css/p/pai7wqhll.css';
import '../../css/d/dntj9sk8v.css';
import '../../css/l/liox7mf_o.css';
import '../../css/x/x4jt87b5a.css';
import '../../css/g/gkle8ybyb.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="g7wfo1l2j"/><path class="pai7wqhll"/><path class="dntj9sk8v"/><path class="liox7mf_o"/><path class="x4jt87b5a"/><path class="gkle8ybyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:nato"} {...others} />);
}

export default Component;
