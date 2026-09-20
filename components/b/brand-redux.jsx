import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f4-beubnc.css';
import '../../css/w/wzsp4oxrh.css';
import '../../css/q/qomvzkabu.css';
import '../../css/w/waq84pbkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f4-beubnc"/><path class="wzsp4oxrh"/><path class="qomvzkabu"/><path class="waq84pbkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-redux"} {...others} />);
}

export default Component;
