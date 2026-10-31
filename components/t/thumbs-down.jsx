import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/f/fikumxb5a.css';
import '../../css/z/zigtzvvvz.css';
import '../../css/y/yp1q00bzk.css';
import '../../css/e/ezgbjglyy.css';
import '../../css/m/mezep8bdy.css';
import '../../css/x/xng3gebxh.css';
import '../../css/u/uyqxtcbzn.css';
import '../../css/j/je400d87x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="fikumxb5a"/><path class="zigtzvvvz"/><path class="wm-shine yp1q00bzk"/><path class="ezgbjglyy wm-k"/><path class="mezep8bdy wm-a"/><path class="xng3gebxh"/><path class="uyqxtcbzn"/><path class="je400d87x wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:thumbs-down"} {...others} />);
}

export default Component;
