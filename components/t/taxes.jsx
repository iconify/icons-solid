import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hpnu4kylx.css';
import '../../css/z/zu8s2opjs.css';
import '../../css/w/w_cmzxb4g.css';
import '../../css/a/apc5rub3n.css';
import '../../css/o/o1zsrccvz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hpnu4kylx"/><path class="zu8s2opjs"/><circle class="w_cmzxb4g"/><circle class="apc5rub3n"/><path class="o1zsrccvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:taxes"} {...others} />);
}

export default Component;
