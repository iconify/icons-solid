import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5nhzmbey.css';
import '../../css/m/mqqk3vlea.css';
import '../../css/o/os2588bqt.css';
import '../../css/h/hqokcpb7d.css';
import '../../css/q/qxxdagisw.css';
import '../../css/o/o-_l5ukpg.css';
import '../../css/t/t4d6mkbta.css';
import '../../css/m/m79lqcbzu.css';
import '../../css/v/v83e48b6z.css';
import '../../css/i/i56sui_ub.css';
import '../../css/r/rwp6zw6sg.css';
import '../../css/e/esx3dhf0m.css';
import '../../css/c/cr79w6zfa.css';
import '../../css/d/d5nuadmto.css';
import '../../css/g/gnvcvklmk.css';
import '../../css/y/ywscsac-l.css';
import '../../css/r/r5ez-wdka.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="w5nhzmbey"/><circle class="mqqk3vlea"/><circle class="os2588bqt"/><circle class="hqokcpb7d"/><circle class="qxxdagisw"/><circle class="o-_l5ukpg"/><path class="t4d6mkbta"/><path class="m79lqcbzu"/><path class="v83e48b6z"/><circle class="i56sui_ub"/><circle class="rwp6zw6sg"/><circle class="esx3dhf0m"/><circle class="cr79w6zfa"/><circle class="d5nuadmto"/><circle class="gnvcvklmk"/><path class="ywscsac-l"/><path class="r5ez-wdka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:christmas-tree"} {...others} />);
}

export default Component;
