import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a76rp8bxg.css';
import '../../css/u/u62-7oxop.css';
import '../../css/b/b8fwnvblh.css';
import '../../css/q/qv17gyqdp.css';
import '../../css/r/r5qu3qtvu.css';
import '../../css/n/nweqvcc1j.css';
import '../../css/w/w4q66gxxo.css';
import '../../css/t/tyk1-dmnw.css';
import '../../css/p/pl4-7q5fd.css';
import '../../css/d/djw2sb-ia.css';
import '../../css/o/o6pebwb-p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a76rp8bxg wm-shadow"/><path class="u62-7oxop wm-shadow"/><path class="b8fwnvblh"/><path class="qv17gyqdp"/><path class="r5qu3qtvu"/><path class="nweqvcc1j"/><path class="w4q66gxxo wm-shine"/><path class="tyk1-dmnw wm-shine"/><path class="pl4-7q5fd"/><path class="djw2sb-ia"/><path class="o6pebwb-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:archive-restore"} {...others} />);
}

export default Component;
