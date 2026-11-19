import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/ww00gcc0v.css';
import '../../css/f/fkjaaab8a.css';
import '../../css/y/yrsmrebbu.css';
import '../../css/i/ibgj5jtlu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ww00gcc0v"/><path class="fkjaaab8a"/><path class="yrsmrebbu"/><path class="ibgj5jtlu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:drone-seed"} {...others} />);
}

export default Component;
