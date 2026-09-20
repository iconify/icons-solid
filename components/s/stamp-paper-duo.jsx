import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oxflyccvw.css';
import '../../css/z/zq57ufblh.css';
import '../../css/p/pweb_3ahr.css';
import '../../css/b/b_x9htpdh.css';
import '../../css/z/zdsz67mwk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="oxflyccvw"/><path class="zq57ufblh"/><path class="pweb_3ahr"/><path clip-rule="evenodd" class="b_x9htpdh"/><path clip-rule="evenodd" class="zdsz67mwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:stamp-paper-duo"} {...others} />);
}

export default Component;
