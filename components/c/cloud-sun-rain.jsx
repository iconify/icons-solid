import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qu5801cok.css';
import '../../css/b/biizantvs.css';
import '../../css/p/p1zvoa7dm.css';
import '../../css/p/pgf4tcubu.css';
import '../../css/p/pf05l3ymp.css';
import '../../css/d/dkfws9ftw.css';
import '../../css/p/plcu17baa.css';
import '../../css/v/vu44q7zlz.css';
import '../../css/t/tyoafldun.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="qu5801cok"/><path class="biizantvs"/><path class="p1zvoa7dm wm-shine"/><path class="pgf4tcubu wm-k"/><path class="pf05l3ymp wm-a"/><path class="dkfws9ftw wm-s"/><path class="plcu17baa"/><path class="vu44q7zlz"/><path class="tyoafldun wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:cloud-sun-rain"} {...others} />);
}

export default Component;
