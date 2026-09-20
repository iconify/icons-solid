import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/u/ujjp4k76n.css';
import '../../css/x/xgs-_qbyw.css';
import '../../css/h/hjaxmkqjk.css';
import '../../css/i/i02nfgb7r.css';
import '../../css/p/p840mbcye.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="ujjp4k76n"/><path class="xgs-_qbyw"/><path class="hjaxmkqjk"/><path class="i02nfgb7r"/><path class="p840mbcye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:yen-coin"} {...others} />);
}

export default Component;
