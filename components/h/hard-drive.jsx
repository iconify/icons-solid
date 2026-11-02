import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/h/h5bwgp51v.css';
import '../../css/f/fk47cqb8t.css';
import '../../css/h/hhf1ftb3e.css';
import '../../css/p/p-3p33b6l.css';
import '../../css/z/zasvzr6jc.css';
import '../../css/z/zwjj__2ay.css';
import '../../css/b/bnaykwomo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="h5bwgp51v"/><path class="fk47cqb8t"/><path class="hhf1ftb3e"/><path class="p-3p33b6l"/><path class="zasvzr6jc"/><path class="zwjj__2ay"/><path class="bnaykwomo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:hard-drive"} {...others} />);
}

export default Component;
