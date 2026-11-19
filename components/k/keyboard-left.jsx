import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ro0m_nbje.css';
import '../../css/v/v73q-8bws.css';
import '../../css/s/sqmgmbbch.css';
import '../../css/a/ahungkbjh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ro0m_nbje"/><path class="v73q-8bws"/><path class="sqmgmbbch"/><path class="ahungkbjh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:keyboard-left"} {...others} />);
}

export default Component;
