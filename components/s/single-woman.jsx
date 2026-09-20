import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hs6z6wbue.css';
import '../../css/h/huarpuj2m.css';
import '../../css/n/n834g0q_n.css';
import '../../css/a/alh2z7bes.css';
import '../../css/o/oz1vajujl.css';
import '../../css/a/afkdl35ow.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hs6z6wbue"/><path class="huarpuj2m"/><path class="n834g0q_n"/><path class="alh2z7bes"/><path class="oz1vajujl"/><path class="afkdl35ow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:single-woman"} {...others} />);
}

export default Component;
