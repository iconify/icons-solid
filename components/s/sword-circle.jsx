import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h_19n4r8a.css';
import '../../css/x/xib8rybep.css';
import '../../css/l/lgi1zefvt.css';
import '../../css/w/w1_e9pbju.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="h_19n4r8a"/><path class="xib8rybep"/><path class="lgi1zefvt"/><path class="w1_e9pbju"/><path class="xrgx2dblx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:sword-circle"} {...others} />);
}

export default Component;
