import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vcl6pjzop.css';
import '../../css/b/b47dp2bje.css';
import '../../css/w/wq_2m_daf.css';
import '../../css/w/wbbk1sbxo.css';
import '../../css/n/n1bdwetnr.css';
import '../../css/i/iha7e1bks.css';
import '../../css/c/ccgtf0tzb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vcl6pjzop wm-shadow"/><path class="b47dp2bje wm-shadow"/><path class="wq_2m_daf"/><path class="wbbk1sbxo"/><path class="n1bdwetnr"/><path class="iha7e1bks"/><path class="ccgtf0tzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:picture-in-picture"} {...others} />);
}

export default Component;
