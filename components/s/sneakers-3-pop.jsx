import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzv02bb8d.css';
import '../../css/f/fkf5uubmb.css';
import '../../css/g/gpegftblm.css';
import '../../css/p/pnfy05jcr.css';
import '../../css/w/wuouzz5em.css';
import '../../css/v/vo6c58bze.css';
import '../../css/r/rpl_-n4ke.css';
import '../../css/h/hvyjaxnax.css';
import '../../css/a/ac0u2db0b.css';
import '../../css/e/eb8tygbnr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yzv02bb8d"/><path class="fkf5uubmb"/><path class="gpegftblm"/><path class="pnfy05jcr"/><path class="wuouzz5em"/><path class="vo6c58bze"/><path class="rpl_-n4ke"/><path class="hvyjaxnax"/><path class="ac0u2db0b"/><path class="eb8tygbnr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:sneakers-3-pop"} {...others} />);
}

export default Component;
