import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/sls-9qgyg.css';
import '../../css/u/u2yqrybfg.css';
import '../../css/o/oj8zjj5jh.css';
import '../../css/f/fp04gnvab.css';
import '../../css/p/p7b7msbwt.css';
import '../../css/t/tngl5wall.css';
import '../../css/e/euez7kctl.css';
import '../../css/q/qxw7mciuk.css';
import '../../css/h/hw0l3b_4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="sls-9qgyg wm-shadow"/><path class="u2yqrybfg"/><path class="oj8zjj5jh"/><path class="fp04gnvab"/><path class="p7b7msbwt wm-shine"/><path class="tngl5wall wm-s"/><path class="euez7kctl wm-s"/><path class="qxw7mciuk wm-s"/><path class="hw0l3b_4d wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:cloud-check"} {...others} />);
}

export default Component;
