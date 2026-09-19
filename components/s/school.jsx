import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6duhzbtn.css';
import '../../css/t/tmcnx0bgf.css';
import '../../css/j/jmp2ofbsg.css';
import '../../css/b/by48vwbxo.css';
import '../../css/m/mzqhsqb9l.css';
import '../../css/n/n5-7uibog.css';
import '../../css/c/cco9hubfk.css';
import '../../css/g/gpbcp1elw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f6duhzbtn"/><path class="tmcnx0bgf"/><path class="jmp2ofbsg"/><path class="by48vwbxo"/><path class="mzqhsqb9l"/><circle class="n5-7uibog"/><circle class="cco9hubfk"/><path class="gpbcp1elw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:school"} {...others} />);
}

export default Component;
