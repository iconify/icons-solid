import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pti0akbdb.css';
import '../../css/z/ztss3y4gc.css';
import '../../css/n/nota1tx4f.css';
import '../../css/b/b7thxjbep.css';
import '../../css/h/h3y0vub_i.css';
import '../../css/w/w8btkcbqx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pti0akbdb wm-k"/><path class="wm-k ztss3y4gc"/><path class="nota1tx4f wm-k"/><path class="b7thxjbep wm-k"/><path class="h3y0vub_i wm-shine"/><path class="w8btkcbqx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:rows"} {...others} />);
}

export default Component;
