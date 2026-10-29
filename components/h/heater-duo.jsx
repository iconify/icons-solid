import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b1ckzpbsc.css';
import '../../css/g/gq4vx_bqt.css';
import '../../css/d/dlwidbcql.css';
import '../../css/s/sy0e_abrq.css';
import '../../css/e/eio_anrbs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="b1ckzpbsc"/><path class="gq4vx_bqt wm-s"/><path class="dlwidbcql"/><path class="sy0e_abrq wm-a"/><path class="eio_anrbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heater-duo"} {...others} />);
}

export default Component;
