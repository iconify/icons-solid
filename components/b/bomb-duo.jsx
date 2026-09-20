import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xqe516b6x.css';
import '../../css/g/g51in7trx.css';
import '../../css/j/j-daifbvw.css';
import '../../css/b/bgco0owby.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="xqe516b6x"/><path class="g51in7trx"/><path class="j-daifbvw"/><path class="bgco0owby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:bomb-duo"} {...others} />);
}

export default Component;
